import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { AuthenticationserviceProvider } from '../authenticationservice/authenticationservice';
import { Note } from '../../models/note';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {
  notes: Array<Note>;
  userid: string;
  constructor(public http: HttpClient, private auth:AuthenticationserviceProvider) {
    this.userid = auth.userid;
    console.log(this.userid);
  }
  getNotes( userid ){

  }
  createNote(title,text){
    let item = new Note(title,text);
    return item;
  }
}
