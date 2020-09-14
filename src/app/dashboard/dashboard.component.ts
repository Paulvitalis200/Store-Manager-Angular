import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username = ''
  role = ''
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo()
  }

  getUserInfo() {
    this.username = this._authService.getUserInfo().username;
    this.role = this._authService.getUserInfo().role;
  }
}
