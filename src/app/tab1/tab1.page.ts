import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { alertController } from '@ionic/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  items: Observable <any>;
  emails = new Map();
  userid = "4";
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore, private auth:AngularFireAuth) {
    this.auth.user.subscribe(user => {
    this.items = firestore.collection('angebote').valueChanges();
    var em = firestore.collection("/users").valueChanges();
    em.subscribe(res => {
      for(var i = 0; i < res.length; i++) {
        this.emails.set(res[i]["id"], res[i]["email"]);
      }
    })
    
    this.userid = user.uid ;

    this.items.subscribe(res => {
      for(var i=0; i<res.length; i++) {
        this.data = res[i].ort;
      }

    })
    
    
    
    })
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
