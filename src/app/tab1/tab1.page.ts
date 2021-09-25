import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  items: Observable <any[]>;
  likedby: Observable <any[]>;
  userid = 4;
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
    this.userid = null ;
  }


  changeState(){ 
    
    if (this.heartName == "heart-outline"){
      this.heartName = "heart"
    }
    else{
      this.heartName = "heart-outline"
    }
  }




}
