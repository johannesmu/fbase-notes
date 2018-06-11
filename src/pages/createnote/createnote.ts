import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CreatenotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createnote',
  templateUrl: 'createnote.html',
})
export class CreatenotePage {
  noteForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private formBuilder: FormBuilder) {
    //create validator for the note form
    this.noteForm = this.formBuilder.group({
      title: ['',Validators.compose([
          Validators.required, Validators.minLength(4)
        ])
      ],
      text: ['',Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  ionViewDidLoad() {

  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  saveNote(){
    this.viewCtrl.dismiss();
  }
}
