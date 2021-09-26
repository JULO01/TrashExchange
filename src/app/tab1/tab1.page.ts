import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSelect } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UpdateBuffer } from '@angular-devkit/schematics/src/utility/update-buffer';
import { alertController } from '@ionic/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  items: Observable <any>;

  filtereditems= new Array();
  
  emails = new Map();
  userid = "4";
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore, private auth:AngularFireAuth) {
    this.auth.user.subscribe(user => {
    this.items = firestore.collection('angebote').valueChanges();
    this.items.subscribe(items => {
      
      for(let item of items){
          
          var found = false;
          for(let existingitem of this.filtereditems){
            if(item.id == existingitem.id){
              existingitem.likes = item.likes;
              found = true;
            }
          }
          if(!found){
            this.filtereditems.push(item);
          }
         

      }
      
    });

    
    this.data;
    
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

  @ViewChild('mySelect',{static:false}) selectRef:IonSelect;
  openSelect(){
    this.selectRef.open();
  }

  searchChanged(e){
      
      this.filtereditems= new Array();
      console.log(e.detail.value);
      this.items.subscribe(items => {
          for(let item of items){
            
            if(item.titel.includes(e.detail.value)){
              this.filtereditems.push(item);
              console.log("add item 2");
            }
              
            
          }
          
      })


  }


  filterChanged(e){
    
    this.filtereditems= new Array();
    
    this.items.subscribe(items => {
        for(let item of items){
          
          if(e.detail.value.every(v=> item.tags.includes(v))){
            this.filtereditems.push(item);
            console.log("add item 3");
            
          }
            
           
        }
        
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
    console.log(this.filtereditems);
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

