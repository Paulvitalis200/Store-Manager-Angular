import { Component, OnInit } from '@angular/core';
import { ProductsService  } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts()
    .subscribe(
      res => this.products = res.Products,
      err => console.log('Error:', err)
    )
  }

}
