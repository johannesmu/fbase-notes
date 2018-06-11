// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class AuthenticationserviceProvider {
  userid: string;
  constructor() {
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {

        user.userid = '';
        unsubscribe();
      } else {
      
        this.userid = user.uid;
        unsubscribe();
      }
    });
  }
  login( email: string, password: string ): Promise <any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      firebase.database().ref('/userProfile').child(newUser.uid).set({ email: email });
    });
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    return firebase.auth().signOut();
  }
}
