import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';
  registerUserData = {
    "username": "",
    "email": "",
    "password": "",
    "role": ""
  }
  constructor(private _location: Location, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.isLoading = true;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.isLoading = false;
        console.log(res, this.registerUserData )
      },
      err => {
        this.isLoading = false;
        this.errorMessage = err.error.message;
        console.log('Error: ', err, this.registerUserData)
      }
    )
  }

  clearFormErrors() {
    this.errorMessage = ''
  }

  backClicked() {
    this._location.back();
  }

}
