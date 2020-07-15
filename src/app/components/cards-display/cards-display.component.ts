import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from '../../../model/flashcards/flashcard';

@Component({
  selector: 'ngx-cards-display',
  styleUrls: ['./cards-display.component.scss'],
  templateUrl: './cards-display.component.html',
})



export class CardsDisplayComponent implements OnInit {
  @Input() public flashcards: FlashCard[];


  ngOnInit(): void {
  }
}
