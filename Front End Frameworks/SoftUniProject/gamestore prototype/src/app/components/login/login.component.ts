import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire } from '@angular/fire/firebase-node';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.auth.doFacebookLogin()
      .then(res => {
        this.router.navigate(['']);
      })
  }

  tryTwitterLogin() {
    this.auth.doTwitterLogin()
      .then(res => {
        this.router.navigate(['']);
      })
  }

  tryGoogleLogin() {
    this.auth.doGoogleLogin()
      .then(res => {
        this.router.navigate(['']);
      })
  }

  tryLogin(value) {
    this.auth.doLogin(value)
      .then(res => {
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }
}
