import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router  } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://storemanagerapi2.herokuapp.com/api/v2/auth/signup"
  private _loginUrl = "https://storemanagerapi2.herokuapp.com/api/v2/auth/login"
  constructor(private http: HttpClient, public _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
    // returns  observable
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUserInfo() {
    return {
      username: localStorage.getItem('username'),
      role: localStorage.getItem('role')
    }
  }
  
}
