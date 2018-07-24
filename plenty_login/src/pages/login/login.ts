import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginResetPasswordPage} from './../login-reset-password/login-reset-password';
import { ProjectsOverviewPage } from './../projects-overview/projects-overview';

import { AuthenticationProvider } from './../../providers/authentication/authentication';

@Component({
  selector:    'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl:     NavController, 
    public navParams:   NavParams,
    public loadingCtrl: LoadingController,
    public auth: AuthenticationProvider,
  ) {
  }
  loginError = false;
  user = {
    Username: '',
    Password: ''
  }
  
  ionViewDidLoad() {
  }

  // LOGIN TASKS
  login(){
    this.auth.login(this.user.Username, this.user.Password)
                      .subscribe(
                        (data:any) => {
                          if (data.data) {
                            alert('success');
                            this.navCtrl.push(ProjectsOverviewPage);
                          }
                        },
                        error => {
                          this.loginError = true;
                        }
                      );
  }

  // GO TO FORGOT PASSWORD PAGE
  goToForgotPass(){
    this.navCtrl.push(LoginResetPasswordPage);
  }

  // GO TO REGISTER PAGE
  goToRegister(){
//    this.navCtrl.push(RegisterPage);
  }

}
