import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { TcmodalPage } from '../tcmodal/tcmodal';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController ) {
  }
  goLogin(){
    this.navCtrl.setRoot( LoginPage );
  }
  showTC(){
    let md = this.modalCtrl.create( TcmodalPage );
    md.present();
  }
  registerUser(){
    if(!this.email || this.validateEmail() == false ){
      this.showAlert('Please fill in all fields','All fields need to be filled in');
      return;
    }
    else if(!this.password){
      this.showAlert('Password','Password');
    }
  }
  showAlert( alert_title: string, message: string ){
    let alert = this.alertCtrl.create({
    title: alert_title,
    subTitle: message,
    buttons: ['Dismiss']
    });
    alert.present();
  }
  validateEmail(){

  }
}
