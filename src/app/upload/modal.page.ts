import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { timeStamp } from 'console';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name="Jan";
  title="";
  description="";
  location="Paderborn";
  tags=[];


  constructor(private modalController: ModalController,private appService:AppService, private auth:AngularFireAuth) { 
    this.auth.user.subscribe(user => {
      this.name = user.uid;
    })
  }

  ngOnInit() {

    
  }

  async dismissModal(){
    this.modalController.dismiss();
  }
  async filterChanged(e){
    this.tags=e.detail.value
  }

  file =null;
  
  async save(){
    console.log("save");
    if(this.title!= "" && this.description != ""){
      var url;
      if(this.file!=null){
          url = await this.appService.addImage(this.file);
          console.log("yes");
          this.appService.addAngebote(this.name,this.title,this.description,this.location, url,this.tags);
          this.dismissModal();
          this.file = null;
          }
           
        
      
      else{
         url = "";
        console.log("NO");
        this.appService.addAngebote(this.name,this.title,this.description,this.location, url,this.tags)
        this.dismissModal();
      
      }
    }
  }
  

  
  
  async changeListener(e){
    
    var image = document.getElementById("output") as HTMLImageElement;
    this.file = e.target.files[0];
    image.src = URL.createObjectURL(this.file);
    
    
    
  }
  
  
    
  

}
