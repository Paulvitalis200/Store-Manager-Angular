import { Component, OnInit } from '@angular/core';
import { SalesService  } from '../sales.service';
import { HttpErrorResponse } from '@angular/common/http';
import  { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales = []
  constructor(private _salesService: SalesService, private _location: Location, private  _router: Router) { }

  ngOnInit(): void {
    this._salesService.getSales()
    .subscribe(
      res => this.sales = res.Sales,
      err => console.log(err)
    )
  }

  backClicked() {
    this._location.back();
  }

}
