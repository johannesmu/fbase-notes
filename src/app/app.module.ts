import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { TcmodalPage } from '../pages/tcmodal/tcmodal';
import { LogoutPage } from '../pages/logout/logout';
import { CreatenotePage } from '../pages/createnote/createnote';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule } from '@angular/common/http';



import { Configuration } from '../configuration/configuration';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';
import { DataserviceProvider } from '../providers/dataservice/dataservice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoutPage,
    AuthenticationPage,
    TcmodalPage,
    CreatenotePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthenticationPage,
    LogoutPage,
    TcmodalPage,
    CreatenotePage
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
