import { Injectable } from '@angular/core';
import { Http,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(public http: Http) {

  }

  signUp(values){
    console.log(values);
    var headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers : headers});

    this.http.post("http://localhost:3000/api/auth/signup",values,options)
      .subscribe(data => {
        console.log("Success");
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
}
