import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { saveConfig } from '@ionic/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Observable<any[]>;
  


  uid: string;

  constructor(public auth: AngularFireAuth,firestore: AngularFirestore) {
    this.grabuid();
    this.items = firestore.collection('angebote').valueChanges();
    // Hier ist die UID nicht aufrufbar
  }

  async grabuid() {
    this.auth.user.subscribe(user => {
      this.uid = user.uid;

      // Hier den eigentlichen init code laufen lassen (uid verfügbar)
    })
  }



}
