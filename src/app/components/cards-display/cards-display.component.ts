import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from '../../../model/flashcards/flashcard';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ngx-cards-display',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: '0',
        transform: 'translateX(100%) rotate(16deg)' }),
        animate('.1s', style({ })),
      ]),
      transition(':leave', [
        style({ }),
        animate('.1s', style({ opacity: '0',
        transform: 'translateX(-16%) rotate(-10deg)'})),
      ]),
    ]),
  ],
  styleUrls: ['./cards-display.component.scss'],
  templateUrl: './cards-display.component.html',
})



export class CardsDisplayComponent implements OnInit {
  @Input() public flashcards: FlashCard[];
  public currentFlashCard: FlashCard;
  public currentFlashCardIndex: number = 0;
  public bntStyle: string = 'btn-default';
  public isShown: boolean = true;

  ngOnInit(): void {
      this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }

  nextCard(): void {
    this.currentFlashCardIndex++;
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    }, 100);

    this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }

  previousCard(): void {
    this.currentFlashCardIndex--;
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    }, 100);

    this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }
}
