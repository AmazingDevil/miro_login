import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

import { PlthttpProvider } from './../plthttp/plthttp';
import { DataserviceProvider } from './../dataservice/dataservice';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private apiUrl = 'https://plentycore.staging.dept42.de/';
  public token: string;
  
  headers: HttpHeaders;

  constructor(
    public http: HttpClient,
    private pltHttp: PlthttpProvider, 
    private dataService: DataserviceProvider
  ) {
    console.log('Hello RestProvider Provider');

    var currentUser = sessionStorage.getItem('currentUser');
    this.token = currentUser;
  }
  private tokenValid: BehaviorSubject<boolean> = new BehaviorSubject(true);

  login(username: string, password: string) {
    return this.pltHttp.postJson(
      'auth/login',
      { 'username': username, 'password': password });
  }

  logout(): void {
    this.pltHttp.getJson('auth/logout').subscribe((r) => {
        this.token = null;
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('retailerGuid');
        sessionStorage.removeItem('projectGuid');
//        this.router.navigate(['/login']);
    });
}
  removeToken(): void {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('retailerGuid');
    sessionStorage.removeItem('projectGuid');
  }

  getToken(): string {
    return sessionStorage.getItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('currentUser')) {
        return true;
    } else {
        return false;
    }
  }
  getUserDetails() {
    return this.pltHttp.getJson('auth/user').subscribe((r: any) => {
        r.data.token = this.getToken();
       // this.dataService.setUserData(r.data);
    },
        error => {
            sessionStorage.removeItem('currentUser');
//            this.router.navigate(['/login']);
        })
  }

  resetPassword(email) {
      return this.pltHttp.postJson('auth/password/forgotten', { 'email': email }).subscribe((r: any) => {
          return r.success;
      })
  }

  isTokenValid() {
      if (!this.isLoggedIn()) {
          return false;
      } else {
          return true;
      }

  }


}
