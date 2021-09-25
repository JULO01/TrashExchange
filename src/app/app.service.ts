import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {AngularFireStorage, AngularFireStorageModule, GetDownloadURLPipe} from '@angular/fire/compat/storage'
import { AngularFireModule } from '@angular/fire/compat';
import {finalize} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    console.log(storage);
    // storage.ref("Screenshot from 2021-09-25 14-24-19.png").getDownloadURL().subscribe(downloadURL => {
    //   console.log(downloadURL);
    // })
    this.items = firestore.collection('angebote').valueChanges();
  } 
  public addAngebote(usertmp:String,titeltmp:String, beschreibungtmp:String, orttmp:String){
    const id = this.firestore.createId();
    const time = new Date().getTime();
    return this.firestore.doc(`angebote/${id}`).set({
      id: id,
      userid:usertmp,
      titel: titeltmp,
      beschreibung:beschreibungtmp,
      ort:orttmp,
      zeit:time,


    });
  
  }
  public addImage(image){
    var path = "img2.jpg";
    var task = this.storage.upload(path,image);
    var url;
    var ref = this.storage.ref(path)
    task.snapshotChanges().pipe(
      finalize(() => url = ref.getDownloadURL() )
   )
  }
  
}
