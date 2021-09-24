import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

  async loadModal(){
    console.log("test");
    var modalController  : ModalController;
    const modal = await this.modalController.create({
      component: ModalPage,
    });

    modal.present();
  
  } ;
  
};  

