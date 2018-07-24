import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginResetPasswordPage } from './login-reset-password';

@NgModule({
  declarations: [
    LoginResetPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginResetPasswordPage),
  ],
})
export class LoginResetPasswordPageModule {}
