import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public modalController: ModalController, public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  closeModal () {
    this.modalController.dismiss();
  }

  async loginpage() {
    this.modalController.dismiss();
    var modalController  : ModalController;
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    modal.present();
  };

  createAccount() {
    
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      this.closeModal();
      // ...
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

}
