import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlashCardSet } from '../model/flashcards/flashcard-set';

@Injectable({
  providedIn: 'root',
})
export class CardyWardyApiService {
  apiURL: string = 'http://localhost:3000/';
  headerDict: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*',
  }

  requestOptions: {
    responseType: 'json',
} = {
    responseType: 'json',
};

  constructor(private httpClient: HttpClient) {}

  public getFlashCards() {
    return this.httpClient.get(`${this.apiURL}flashcards`, this.requestOptions);
  }
}
