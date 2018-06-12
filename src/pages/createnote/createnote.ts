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
  //to store the form data ngModels
  title: string;
  text: string;
  constructor(public navCtrl:NavController, public navParams:NavParams, public viewCtrl:ViewController, private formBuilder: FormBuilder) {
    //create validator for the note form
    this.noteForm = this.formBuilder.group({
      title: ['',Validators.compose([
        //the field is required
          Validators.required,
          //the minimum length is 4 characters
          Validators.minLength(4)
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
    //user cancels so don't pass any data
    this.viewCtrl.dismiss();
  }
  saveNote(){
    //get the note title and text from the page's ngModels
    let data = {title: this.title, text: this.text};
    //pass the data when the modal is closed
    this.viewCtrl.dismiss( data );
  }
}
