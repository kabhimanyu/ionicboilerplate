import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  constructor() {

  }

  login(){
    return new Promise((resolve) => {
      setTimeout (() => {
        resolve(false);
      }, 3);
    });
  }
}
