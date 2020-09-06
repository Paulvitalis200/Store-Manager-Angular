import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = []
  constructor(private _location: Location, private _employeesService:EmployeesService) { }


  ngOnInit(): void {
    this._employeesService.getEmployees()
    .subscribe(
      res => this.employees = res.users,
      err => console.log(err)
    )
  }

  backClicked() {
    this._location.back();
  }

}
