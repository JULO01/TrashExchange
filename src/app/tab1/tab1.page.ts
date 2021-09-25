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


  items: Observable <any>;
  userid = 4;
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
    
    this.data;

    this.items.subscribe(res => {
      this.data = res[0].ort;
      console.log(this.data)

    })
    
    
    this.userid = null ;
  }




  changeState(item){ 
    
    if (item.liked){
      item.liked = false;
    }
    else{
      item.liked = true;
    }
    
    console.log(item.liked);
    this.firestore.collection('angebote').doc(item.id).update(item);
  }




}
