import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res, this.registerUserData ),
      err => console.log('Error: ', err, this.registerUserData)
    )
  }

  backClicked() {
    this._location.back();
  }

}
