import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { LoginResetPasswordPage } from '../pages/login-reset-password/login-reset-password';
import { ProjectsOverviewPage } from '../pages/projects-overview/projects-overview';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { PlthelperProvider } from '../providers/plthelper/plthelper';
import { PlthttpProvider } from '../providers/plthttp/plthttp';
import { DataserviceProvider } from '../providers/dataservice/dataservice';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginResetPasswordPage,
    ProjectsOverviewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginResetPasswordPage,
    ProjectsOverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    PlthelperProvider,
    PlthttpProvider,
    DataserviceProvider
  ]
})
export class AppModule {}
