import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { Note } from '../../models/note';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {
  notes: Array<Note>;
  constructor(public http: HttpClient) {

  }
  getNotes(){}
  createNote(title,text,color){
    let item = new Note();
    item.title = title;
    item.note = text;
    item.color = color;
    item.created = new Date().getTime();
  }
}
