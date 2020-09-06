import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private _salesUrl = "https://storemanagerapi2.herokuapp.com/api/v2/sales"

  constructor(private http: HttpClient) { }

  getSales() {
    return this.http.get<any>(this._salesUrl)
  }
}
