import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController: ModalController) {
    this.login()
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      backdropDismiss:false,
      
    });


    await modal.present();
  }

  async loadModal(){
    console.log("test");
    var modalController  : ModalController;
    const modal = await this.modalController.create({
      component: ModalPage,
    });

    modal.present();
  
  };

  public close() {
    this.modalController.dismiss();
  }
  
};  

