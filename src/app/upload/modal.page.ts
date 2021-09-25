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


  constructor(private modalController: ModalController,private appService:AppService) { 

  }

  ngOnInit() {

    
  }

  async dismissModal(){
    this.modalController.dismiss();
  }

  async save(){
    if(this.title!= "" && this.description != ""){
    this.appService.addAngebote(this.name,this.title,this.description,this.location)
    this.dismissModal();
    }
  }

  
  file:File;
  async changeListener(e){
    var image = document.getElementById("output") as HTMLImageElement;
    this.file = e.target.files[0];
    image.src = URL.createObjectURL(this.file);
    this.appService.addImage(this.file);
    
  }
  
  
    
  

}
