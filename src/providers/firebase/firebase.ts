import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Injectable()
export class FirebaseProvider {
  authState: FirebaseAuthState = null;
  constructor( public AF: AngularFireModule, public AFauth: AngularFireAuthModule, public AFdb: AngularFireDatabaseModule) {

  }
  async login(email,password){
    try {
      const result = await this.AFauth.auth.signInWithEmailAndPassword( email, password );
      if (result) {
        //this.navCtrl.setRoot('HomePage');
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  async register(email,password){
    try {
      const result = await this.AFauth.auth.createUser( email, password,()={} );
      if (result) {
        //this.navCtrl.setRoot('HomePage');
        
      }
    }
    catch (e) {
      console.error(e);
    }
  }
}
