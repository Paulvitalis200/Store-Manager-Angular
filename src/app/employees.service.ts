import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private _employeesUrl = "https://storemanagerapi2.herokuapp.com/api/v2/users";
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>(this._employeesUrl)
    // returns the data as an observable. We need to subscribe to them in the components
  }
}
