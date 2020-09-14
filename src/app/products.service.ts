import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productsUrl = "https://storemanagerapi2.herokuapp.com/api/v2/products";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this._productsUrl)
    // returns the data as an observable. We need to subscribe to them in the components
  }

  addProduct(product) {
    return this.http.post<any>(this._productsUrl, product)
  }
}
