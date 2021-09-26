import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore, private storage:AngularFireStorage) {
    this.items = firestore.collection('angebote').valueChanges();
  } 
  public addAngebote(usertmp:String,titeltmp:String, beschreibungtmp:String, orttmp:String, url:String){
    const id = this.firestore.createId();
    const time = new Date().getTime();
    return this.firestore.doc(`angebote/${id}`).set({
      id: id,
      userid:usertmp,
      titel: titeltmp,
      beschreibung:beschreibungtmp,
      ort:orttmp,
      zeit:time,
      url:url,
      likes: []
    });
    
   
  }

  public async addImage(image){

    var path = image.name;

    var task = this.storage.upload(path,image);
    var url_string;
    var ref = this.storage.ref(path)
    return new Promise((resolve,reject) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => {
            resolve(url);
            console.log(url);
            // <-- do what ever you want with the url..
          });
        })
      ).subscribe();

    });
  }

  public addLike(uid:String,aid:String) 
  {
    var data = this.firestore.doc("angebote/" + aid).ref.get()
    .then((doc) => {
      if (doc.exists) {
          var invoice = doc.data();
          console.log('Invoice data: ', doc.data());

          if((invoice["likes"].indexOf(uid) > -1))
          {
            invoice["likes"].pop(uid);
            console.log(invoice["likes"]);
          this.firestore.doc(`angebote/${aid}`).update({
            likes: invoice["likes"]
          })
        
          }
          else{
            invoice["likes"].push(uid);
            console.log(invoice["likes"]);
          this.firestore.doc(`angebote/${aid}`).update({
            likes: invoice["likes"]
          })};
      } else {
          console.error('No matching invoice found');
      }
    });
    
  }

}
