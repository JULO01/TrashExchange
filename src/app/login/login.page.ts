import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

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
    
    this.auth.signInWithEmailAndPassword("sda23afsaf@gmail.com", "123456")
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
