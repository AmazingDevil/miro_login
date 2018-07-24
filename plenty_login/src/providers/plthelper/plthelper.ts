import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from "@angular/forms";

/*
  Generated class for the PlthelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlthelperProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PlthelperProvider Provider');
  }

  arrayOfObjMapper(arr, values, prop) {
    var masterArray = [];
    for (var property1 in values) {
      for (var property2 in arr) {
        if (arr[property2][property1]) {
          var a = values[property1];
          var b = arr[property2][property1];
          var x = {};
          x[prop[0]] = a;
          x[prop[1]] = b;
          masterArray.push(x);
        }
      }
    }
    return masterArray;
  }
  validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  hasNumber(myString) {
    return /\d/.test(myString);
  }
  hasLowerCase(myString) {
    return (/[a-z]/.test(myString));
  }

  hasUpperCase(myString) {
    return (/[A-Z]/.test(myString));
  }
}
