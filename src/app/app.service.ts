import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
  } 
  public addAngebote(usertmp:String,titeltmp:String, beschreibungtmp:String, orttmp:String){
    const id = this.firestore.createId();
    const time = new Date().getTime();
    return this.firestore.doc(`angebote/${id}`).set({
      id: id,
      userid:usertmp,
      titel: titeltmp,
      beschreibung:beschreibungtmp,
      ort:orttmp,
      zeit:time,
      likes: []
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
