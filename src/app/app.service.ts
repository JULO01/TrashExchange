import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
  }
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
  } 
  public name(){
    return this.firestore.doc(`angebote/${id}`).set({
      id: id,
      titel: "test",
      text: "asdaf",
      location: "paderborn"

    });

    const id = this.firestore.createId();

  }
}
