import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  title="";
  location="";
  description="";
  constructor(private modalController: ModalController, private firestore:AngularFirestore, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async dismissModal(){
    this.modalController.dismiss();
  }

  async savetodb(){
    console.log(this.title);
    this.firestore.collection('angebote').add({
      
      location:this.location,
      title:this.title,
      description:this.description
    });
  } 
  async showPopOver(ev:any){
    console.log(ev);
    const popover = await this.popoverController.create({
      event:ev,
      component:PopoverComponent,
      showBackdrop:false,
      
    });
    await popover.present();
  }

}
