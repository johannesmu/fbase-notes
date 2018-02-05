import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TcmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tcmodal',
  templateUrl: 'tcmodal.html',
})
export class TcmodalPage {
  accept: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  closeModal(){
    this.navCtrl.pop();
  }
  
  

}
