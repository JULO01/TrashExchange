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


  constructor(private modalController: ModalController,private appService:AppService) { }

  ngOnInit() {

    
  }

  async dismissModal(){
    this.modalController.dismiss();
  }

  async submit(){
    this.appService.addAngebote(this.name,this.title,this.description,this.location)
  }

  
    
  

}
