import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  //Array-->
  //items = funktion(datenbank)
  //
  items: Observable <any[]>;
  userid="";

  constructor(firestore:AngularFirestore, private auth:AngularFireAuth) {
    this.auth.user.subscribe(user => {
      this.userid = user.uid;
      this.items = firestore.collection('angebote').valueChanges();
    });
  }

  logout() {
    this.auth.signOut();
  }
  
}
