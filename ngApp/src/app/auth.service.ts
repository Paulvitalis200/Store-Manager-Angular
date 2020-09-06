import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://storemanagerapi2.herokuapp.com/api/v2/auth/signup"
  private _loginUrl = "https://storemanagerapi2.herokuapp.com/api/v2/auth/login"
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
    // returns  observable
  }
}
