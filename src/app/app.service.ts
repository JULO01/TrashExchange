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
  public addAngebote(usertmp:String,titeltmp:String, beschreibungtmp:String, orttmp:String, zeittmp:String){
    const id = this.firestore.createId();
    return this.firestore.doc(`angebote/${id}`).set({
      id: id,
      userid:usertmp,
      titel: titeltmp,
      beschreibung:beschreibungtmp,
      ort:orttmp,
      zeit:zeittmp,

    });

   
  }
}
