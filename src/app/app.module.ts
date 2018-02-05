import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { TcmodalPage } from '../pages/tcmodal/tcmodal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';


import { Configuration } from '../configuration/configuration';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';
import { DataserviceProvider } from '../providers/dataservice/dataservice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationPage,
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
    AuthenticationPage,
    TcmodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationserviceProvider,
    DataserviceProvider
  ]
})
export class AppModule {}
