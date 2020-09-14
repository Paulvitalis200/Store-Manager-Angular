import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';
  loginUserData = {
    "email": "",
    "password": ""
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  clearFormErrors() {
    this.errorMessage = ''
  }

  loginUser() {
    this.isLoading = true
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', res.username);
        this.isLoading = false;
        this._router.navigate(['/dashboard'])
      },
      err => {
        this.isLoading = false
        this.errorMessage = err.error.message
        console.log('Error:', this.errorMessage)
      }
    )
  }

}
