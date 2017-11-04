import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Headers, RequestOptions} from '@angular/http';

import { UserService } from '../../providers/userService';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignUpPage {
  validationsForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService : UserService) {

  }

  onSubmit(values){
    console.log(values);
    this.userService.signUp(values);
  }

  validationsForm = this.formBuilder.group({
      // username: new FormControl('', Validators.compose([
      //   UsernameValidator.validUsername,
      //   Validators.maxLength(25),
      //   Validators.minLength(5),
      //   Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      //   Validators.required
      // ])),
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      // gender: new FormControl(this.genders[0], Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    });


  var validationMessages = {
    // 'username': [
    //   { type: 'required', message: 'Username is required.' },
    //   { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    //   { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    //   { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
    //   { type: 'validUsername', message: 'Your username has already been taken.' }
    // ],
    'firstName': [
      { type: 'required', message: 'First name is required.' },
      { type: 'minlength', message: 'First name must be at least 3 characters long.' },
    ],
    'lastName': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'Phone is required.' },
      // { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required' }
    ]
  }
}
