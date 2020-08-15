import { Component, OnInit } from '@angular/core';
import { FlashCardSet } from '../../../model/flashcards/flashcard-set';
import { CardyWardyApiService } from '../../../services/cardy-wardy-api.service';

@Component({
  selector: 'ngx-browse',
  styleUrls: ['./browse.component.scss'],
  templateUrl: './browse.component.html',
})



export class BrowseComponent implements OnInit {
  constructor(
    private apiService: CardyWardyApiService) {
  }

  flashCardSets: FlashCardSet[];
  flashCardSetsLoaded: boolean = false;
  ngOnInit(): void {
    this.getFeed();
  }

  async getFeed() {
    this.flashCardSetsLoaded = false;
    this.apiService.getFlashCards().then(res => {
      this.flashCardSets = res;
      this.flashCardSetsLoaded = true;
    });
  }
}
