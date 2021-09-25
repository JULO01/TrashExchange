import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


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
  //userid: Observable <any[]>;

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
    this.likedby = firestore.collection('likedby').valueChanges();
    
    //debug
    

    //debug
    
    this.userid = null ;
  }


  async hasLiked(documentId:string){
    const hasLiked = await this.firestore.collection('angebote').doc(documentId).collection('likedby').ref.where('userid', '==', this.userid);
    return hasLiked?"heart":"heart-outline";

  }

  heartButtonPushed(itemId){
  
    
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
