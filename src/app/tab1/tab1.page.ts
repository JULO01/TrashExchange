import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSelect } from '@ionic/angular';
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

  filtereditems= new Array();
  userid = 4;
  
  //debug
  data: { id: string; titel: string;}[];

  heartName = "heart-outline";

  constructor(private firestore:AngularFirestore) {
    this.items = firestore.collection('angebote').valueChanges();
    this.items.subscribe(items => {
      for(let item of items){
        
          this.filtereditems.push(item);
          
        
      }
      
  });

    
    this.data;
    

    this.items.subscribe(res => {
      this.data = res[0].ort;
      console.log(this.data)

    })
    
    
    this.userid = null ;
  }

  @ViewChild('mySelect',{static:false}) selectRef:IonSelect;
  openSelect(){
    this.selectRef.open();
  }

  searchChanged(e){
      console.log(e.detail.value);
      this.filtereditems= new Array();
      console.log(e.detail.value);
      this.items.subscribe(items => {
          for(let item of items){
            
            if(item.titel.includes(e.detail.value)){
              this.filtereditems.push(item);
            }
              
            
          }
          
      })


  }


  filterChanged(e){
    //this.filtereditems = this.items;
    this.filtereditems= new Array();
    
    this.items.subscribe(items => {
        for(let item of items){
          
          if(e.detail.value.every(v=> item.tags.includes(v))){
            this.filtereditems.push(item);
            
          }
            
           
        }
        
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
