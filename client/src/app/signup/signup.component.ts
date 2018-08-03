import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})

export class SignupComponent{
  
  email: string = '';
  password: string = '';
  auth = {
    email: '',
    password: ''
  };
  user = ''

  constructor(private authService: AuthService) { }

  handleSignup(){
    this.auth.email = this.email;
    this.auth.password = this.password;

    this.authService.signupService(this.auth)
    .subscribe(user => user = this.user)

    console.log(this.user);
  }
}
