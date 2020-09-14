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
  isLoading: boolean = false;
  success: boolean = false;
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
    this.success = false;
  }

  addProduct() {
    this.isLoading = true;
    this._productsService.addProduct(this.productData)
    .subscribe(res => {
      this.isLoading = false
      console.log(res)
      console.log(this.productData)
      this.success = true;
      this._router.navigate(['/products'])
    },
    err => {
      this.isLoading = false;
      this.success = false;
      console.log(err)
    })
  }

  backClicked() {
    this._location.back();
  }
}
