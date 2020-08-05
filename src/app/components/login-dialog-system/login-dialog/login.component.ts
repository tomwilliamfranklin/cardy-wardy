import { Component, OnInit } from '@angular/core';
import { CardyWardyApiService } from '../../../../services/cardy-wardy-api.component';

@Component({
  selector: 'ngx-login-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private apiService: CardyWardyApiService) {
  }

  public username: String;
  public password: String;

  ngOnInit(): void {

  }

  Login(): void {
    this.apiService.postLogin(this.username, this.password);
  }
}