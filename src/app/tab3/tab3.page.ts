import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


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

  constructor(firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
  }

}
