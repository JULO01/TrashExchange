import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { saveConfig } from '@ionic/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
  }
  
}
