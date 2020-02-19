
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire } from '@angular/fire/firebase-node';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authError: any;
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private auth: AuthService, 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.auth.doFacebookLogin()
    .then(res =>{
      this.router.navigate(['']);
    }, err => console.log(err)
    )
  }

  tryTwitterLogin(){
    this.auth.doTwitterLogin()
    .then(res =>{
      this.router.navigate(['']);
    }, err => console.log(err)
    )
  }

  tryGoogleLogin(){
    this.auth.doGoogleLogin()
    .then(res =>{
      this.router.navigate(['']);
    }, err => console.log(err)
    )
  }

  tryRegister(value){
    this.auth.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
      this.router.navigate(['']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

}

