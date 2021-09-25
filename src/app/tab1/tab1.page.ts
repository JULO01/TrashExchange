import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  uid: string;

  constructor(public auth: AngularFireAuth) {
    this.grabuid();
    // Hier ist die UID nicht aufrufbar
  }

  async grabuid() {
    this.auth.user.subscribe(user => {
      this.uid = user.uid;

      // Hier den eigentlichen init code laufen lassen (uid verfügbar)
    })
  }


}
