import { Component, OnInit } from '@angular/core';
import { FlashCardSet } from '../../../model/flashcards/flashcard-set';
import { FlashCard } from '../../../model/flashcards/flashcard';
import { CardyWardyApiService } from '../../../services/cardy-wardy-api.component';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public FlashCardSet: FlashCardSet = new FlashCardSet;
  public flashcards: FlashCard[] = [new FlashCard, new FlashCard];
  constructor(
    private apiService: CardyWardyApiService) {
  }

  ngOnInit(): void {
    this.FlashCardSet.flashcards = this.flashcards;
  }

  addCard(): void {
    this.flashcards.push(new FlashCard);
  }

  createDeck(): void {
    this.apiService.postDeck(this.FlashCardSet).then(res => {
      console.log(res)
    });
  }
}
