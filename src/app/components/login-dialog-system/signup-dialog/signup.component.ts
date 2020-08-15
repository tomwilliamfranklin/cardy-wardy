import { Component, OnInit } from '@angular/core';
import { CardyWardyApiService } from '../../../../services/cardy-wardy-api.service';

@Component({
  selector: 'ngx-signup-dialog',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private apiService: CardyWardyApiService) {
  }

  public username: String;
  public password: String;

  ngOnInit(): void {

  }

  Signup(): void {
    this.apiService.postLogin(this.username, this.password);
  }
}
