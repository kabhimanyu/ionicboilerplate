import { Component } from '@angular/core';

import { LoginPage } from '../login/login'
import { SignUpPage } from '../signup/signup'

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})

export class LandingPage {
  loginPage = LoginPage;
  signUpPage = SignUpPage;

  constructor() {
  }
}
