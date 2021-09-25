import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { RegisterPage } from '../register/register.page';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public modalController: ModalController, public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  closeModal () {
    this.modalController.dismiss();
  }

  async register(){
    this.modalController.dismiss();
    var modalController  : ModalController;
    const modal = await this.modalController.create({
      component: RegisterPage,
    });
    modal.present();
  
  };


  signinGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      this.closeModal();
      // ...
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }


  signin() {
    // demo acc: sda23afsaf@gmail.com, 123456
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      this.modalController.dismiss();
      // ...
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

}
