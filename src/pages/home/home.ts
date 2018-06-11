import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { AuthenticationPage } from '../authentication/authentication';
import { CreatenotePage } from '../createnote/createnote';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userid: string;
  constructor(public navCtrl: NavController, public authenticationservice: AuthenticationserviceProvider, private modalCtrl: ModalController) {
    if(authenticationservice.userid){
      this.userid = authenticationservice.userid;
      console.log(this.userid);
    }
    else{
      this.userid = '';
      //this.navCtrl.push(AuthenticationPage);
    }
  }
  ionViewDidLoad(){
    //when page loads
    //get notes

  }
  openCreate(){
    let md = this.modalCtrl.create( CreatenotePage );
    md.present();
  }

}
