import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModalController } from 'ionic-angular';

import { TcmodalPage } from '../tcmodal/tcmodal';

import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  loginForm : FormGroup;
  registerForm: FormGroup;
  
  public state: string = 'login';
  public tnc_accept: boolean;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private authservice: AuthenticationserviceProvider,
              private formBuilder: FormBuilder ) {
    //construct something
    this.registerForm = this.formBuilder.group({
      email: ['',Validators.compose([
          Validators.email,
          Validators.required
        ])
             ],
      password: ['',Validators.compose([
        Validators.required,
        Validators.minLength(8)])
                ],
      tnc: [false,Validators.requiredTrue]
    });
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.compose([
          Validators.email,
          Validators.required
        ])
      ],
      password: ['',
        Validators.required
      ] 
    })
  }

  toggleForms(){
    if( this.state == 'login' ){
      this.state = 'signup';
      this.loginForm.reset();
    }
    else{
      this.state = 'login';
      this.registerForm.reset();
    }
  }
  showTC(){
    //show TcmodalPage as a modal
    let md = this.modalCtrl.create( TcmodalPage );
    md.present();
  }
}
