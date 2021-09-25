import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController,private appService:AppService) { }

  ngOnInit() {

    this.appService.addAngebote("test1","test2","test3","test4","test5",)
  }

  async dismissModal(){
    this.modalController.dismiss();
  }

}
