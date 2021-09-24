import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalCtrl: ModalController) {
    this.login()
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage
    });


    await modal.present();
  }

  
}
