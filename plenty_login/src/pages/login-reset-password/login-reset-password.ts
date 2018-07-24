import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { PlthelperProvider } from './../../providers/plthelper/plthelper';
/**
 * Generated class for the LoginResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-reset-password',
  templateUrl: 'login-reset-password.html',
})
export class LoginResetPasswordPage {

  email = '';
  displayMessage = false;
  message = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthenticationProvider,
    private helpService: PlthelperProvider
  ){
    this.authService.isLoggedIn();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginResetPasswordPage');
  }

  sendMail() {
    if (this.email == '' || !this.helpService.validateEmailAddress(this.email)) {
      this.displayMessage = true;
      this.message = 'Please enter a valid email address.';
      return;
    }
    this.displayMessage = true;
    if (this.authService.resetPassword(this.email)) {
      this.message = 'If there is an account linked to this address in our system, you will receive an email.';
//      this.isDisabled = true;
    } else {
      this.message = 'There was a server error.';
    }
  }
}
