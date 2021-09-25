import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import {AngularFireStorage, AngularFireStorageModule, GetDownloadURLPipe} from '@angular/fire/compat/storage'
import { AngularFireModule } from '@angular/fire/compat';
import {finalize} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    console.log(storage);
    // storage.ref("Screenshot from 2021-09-25 14-24-19.png").getDownloadURL().subscribe(downloadURL => {
    //   console.log(downloadURL);
    // })
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
      url:url

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
  
}
