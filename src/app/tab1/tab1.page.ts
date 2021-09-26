import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { alertController, popoverController } from '@ionic/core';
import { UpdateBuffer } from '@angular-devkit/schematics/src/utility/update-buffer';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  items: Observable <any>;
  userid = "4";
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
    
    this.data;

    this.items.subscribe(res => {
      this.data = res[0].ort;

    })
    
    
  }



  checkFavorite(item){
    
    
    if (typeof(item.likes)== "undefined") {
      return "heart-outline"
    }

    

    if(item.likes.includes(this.userid)){
      
      return "heart"
    }

    else{
      return "heart-outline"
    }

  }

  changeHeartState(item){
    var dc = this.firestore.collection('/angebote').doc(item.id);
    dc.ref.get()
    .then(doc => {
      var likeArray = doc.data()["likes"]

      if(likeArray.includes(this.userid)){
        const index = likeArray.indexOf(this.userid);
        likeArray.splice(index, 1)
      }

      else{
        likeArray.push(this.userid)
      }

      this.firestore.collection('/angebote').doc(item.id).update({likes:likeArray})
    })


  }


}

