import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import firebase from 'firebase';

import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { AuthenticationPage } from '../authentication/authentication';
import { CreatenotePage } from '../createnote/createnote';

import {Note} from '../../models/note';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userid: string;
  notes: Array <Note> = [];
  constructor(public navCtrl: NavController,
    public authenticationservice: AuthenticationserviceProvider,
    private modalCtrl: ModalController,
    private dataservice:DataserviceProvider)
  {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.userid = user.uid;
        this.dataservice.userid = user.uid;
        //get handle inside function for this.notes
        this.dataservice.getNotes(this.userid, (notes) => {
          var count = Object.keys(notes).length;
          var keys = Object.keys(notes);
          for(let i:number =0; i< count; i++){
            //console.log( notes[ keys[i] ] );
            this.notes.push( notes[ keys[i] ]);
          }
        });
      }
      else {
        //user is not signed in
      }
    });
  }
  openCreateModal(){
    let md = this.modalCtrl.create( CreatenotePage );
    //add a listener for when the modal is closed
    md.onDidDismiss( (data) => {
      //save the data to firebase usin the DataserviceProvider
      this.dataservice.createNote(data,this.userid);
      this.dataservice.getNotes(this.userid);
    });
    md.present();
  }
  renderNotes(notes){
    var count = Object.keys(notes).length;
    var keys = Object.keys(notes);
    for(let i:number =0; i< count; i++){
      //console.log( notes[ keys[i] ] );
      this.notes.push( notes[ keys[i] ]);
    }
  }
}
