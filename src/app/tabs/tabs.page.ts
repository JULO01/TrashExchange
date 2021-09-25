import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ModalPage } from '../upload/modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  uploadModal: Object;
  constructor(private modalController: ModalController) {
    this.login()
    
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage
    });


    await modal.present();
  }

  
  async loadUploadModal(){
    
    
    const uploadModal = await this.modalController.create({
      component: ModalPage,
    });

    uploadModal.present();
  } ;
  async dismissUploadModal(){
    
  }
  
};  

