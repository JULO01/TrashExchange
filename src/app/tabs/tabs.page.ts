import { Component, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

import { ModalPage } from '../modal/modal.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})



export class TabsPage {
  public uid: string = "";

  constructor(public auth: AngularFireAuth, private modalController: ModalController) {
    this.auth.user.subscribe(user => {
      if(user) {
        this.uid = user.uid;
      } else {
        this.login();
      }
    })

  }


  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      backdropDismiss:false,
      
    });
    
    await modal.present();
  }

  
  async loadUploadModal(){
    
    
    const uploadModal = await this.modalController.create({
      component: ModalPage,
      id:"upload",
      swipeToClose:true,
      animated:true,

    });

    await uploadModal.present();
    
  } ;

  
  
  
};