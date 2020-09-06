import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  productData = {
    "name": "",
    "inventory": "",
    "price": "",
    "minimum_stock": "",
    "category": ""
  }
  constructor(private _location: Location,
              private _productsService: ProductsService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this._productsService.addProduct(this.productData)
    .subscribe(res => {
      console.log(res)
      console.log(this.productData)
      this._router.navigate(['/products'])
    },
    err => console.log(err))
  }

  backClicked() {
    this._location.back();
  }
}
