import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import  { Router } from '@angular/router';

import { ProductsService  } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isLoading: boolean = false;
  products = []
  constructor(private _productsService: ProductsService,
              private _router: Router,
              private _location: Location) { }

  ngOnInit(): void {
    this.isLoading = true;
    this._productsService.getProducts()
    .subscribe(
      res => {
        this.isLoading = false;
        this.products = res.Products
        console.log(this.products)
       },
      err => {
        this.isLoading = false;
        if(err instanceof HttpErrorResponse) {
          if (err.status === 401  || err.status === 422){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

  backClicked() {
    this._location.back();
  }

}
