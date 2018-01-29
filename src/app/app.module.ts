import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TcmodalPage } from '../pages/tcmodal/tcmodal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { FirebaseProvider } from '../providers/firebase/firebase';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { Configuration } from '../configuration/configuration';

// const firebaseConfig = {
//   apiKey: "AIzaSyC-_t_u6Ifv1DU8NIHWm7pJnQDobyNGaxA",
//   authDomain: "notes-1b515.firebaseapp.com",
//   databaseURL: "https://notes-1b515.firebaseio.com",
//   projectId: "notes-1b515",
//   storageBucket: "notes-1b515.appspot.com",
//   messagingSenderId: "284095236693"
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    TcmodalPage
  ],
  imports: [
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp( Configuration.firebase ),
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    TcmodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
