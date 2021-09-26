import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name="Jan";
  title="";
  description="";
  location="Not yet implemented";
  tags=[];


  constructor(private modalController: ModalController,private appService:AppService) { 

  }

  ngOnInit() {

    
  }

  async dismissModal(){
    this.modalController.dismiss();
  }
  async filterChanged(e){
    this.tags=e.detail.value
  }


  file = null;
  async save(){
    console.log("save");
    if(this.title!= "" && this.description != ""){
      var url;
      if(this.file!=null){
          url = await this.appService.addImage(this.file);
          console.log("yes");
          this.appService.addAngebote(this.name,this.title,this.description,this.location, url,this.tags);
          this.dismissModal();
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
