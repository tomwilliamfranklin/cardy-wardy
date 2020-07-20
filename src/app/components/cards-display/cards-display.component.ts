import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from '../../../model/flashcards/flashcard';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'ngx-cards-display',
  animations: [
    trigger('test', [
        state('left', style({transform: 'translateX(-100%) rotate(-45deg)', opacity: 0})),
        state('right', style({ transform: 'translateX(100%) rotate(45deg)', opacity: 0 })),
        transition('* => left', [
          animate('0.7s'),
        ]),
        transition('* => right', [
          animate('0.7s'),
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
  public isShown: string = 'default';

  ngOnInit(): void {
      this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }

  nextCard(): void {
    this.currentFlashCardIndex++;
    this.isShown = 'right';
    setTimeout(() => {
      this.isShown = 'default';
    }, 100);

    this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }

  previousCard(): void {
    this.currentFlashCardIndex--;
    this.isShown = 'left';
    setTimeout(() => {
      this.isShown = 'default';
    }, 100);

    this.currentFlashCard = this.flashcards[this.currentFlashCardIndex];
  }
}
