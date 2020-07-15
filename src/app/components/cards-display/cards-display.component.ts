import { Component, OnInit } from '@angular/core';
import { CardyWardyApiService } from '../../../services/cardy-wardy-api.component';

@Component({
  selector: 'ngx-cards-display',
  styleUrls: ['./cards-display.component.scss'],
  templateUrl: './cards-display.component.html',
})



export class CardsDisplayComponent implements OnInit {
  constructor(
    private apiService: CardyWardyApiService) {
  }
  ngOnInit(): void {
    console.log("hello")
  }
}
