import { Component, OnInit } from '@angular/core';
import { ProductsService  } from '../products.service';
import { HttpErrorResponse } from '@angular/common/http';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  constructor(private _productsService: ProductsService,
              private _router: Router) { }

  ngOnInit(): void {
    this._productsService.getProducts()
    .subscribe(
      res => {
        this.products = res.Products
        console.log(this.products)
       },
      err => {
        if(err instanceof HttpErrorResponse) {
          if (err.status === 401  || err.status === 422){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
