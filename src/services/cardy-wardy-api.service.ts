import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbToastrService, NbGlobalPosition } from '@nebular/theme';
import { FlashCardSet } from '../model/flashcards/flashcard-set';
import { TestService } from './test';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CardyWardyApiService {
  apiURL: string = 'http://localhost:3000/';
  headerDict: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': '*',
  };

  requestOptions: {
    responseType: 'json',
  } = {
    responseType: 'json',
  };
  constructor(private httpClient: HttpClient,
    private toastrService: NbToastrService,
    private authService: AuthService) {}

  public getFlashCards() {
    return new Promise<FlashCardSet[]>((resolve, reject) => {
        this.httpClient.get<FlashCardSet[]>(`${this.apiURL}flashcards`, this.requestOptions).subscribe(response => {
            resolve(response);
        }, error => {
              this.toastrService.show('Error retrieving the flashcard sets. Please refresh the page and try again.'
              + ' If this problem persists please wait a few minutes as the servers may have gone offline. ',
              'Error loading Flashcard sets.',
              {position: 'top-right' as NbGlobalPosition, status: 'danger', duration: 6000});
            reject(false);
        });
    });
  }

  public postDeck(deck) {
    return new Promise<FlashCardSet>((resolve, reject) => {
      this.httpClient.post<FlashCardSet>(`${this.apiURL}flashcards/deck`, deck, this.requestOptions).subscribe(
        response => {
          resolve(response);
      }, error => {
            this.toastrService.show('Error creating flashcard deck. Something went wrong.', 'Error creating Flashcard deck.',
            {position: 'top-right' as NbGlobalPosition, status: 'danger', duration: 6000});
          reject(false);
      });
    });
  }

  public postLogin(email: String, password: String) {
    return new Promise<any>((resolve, reject) => {
      this.httpClient.post<any>(`${this.apiURL}auth/login`, {email, password}, this.requestOptions).subscribe(
        response => {

          this.authService.setToken(response.token);

          resolve(response);

      }, error => {
        console.log(error)
            this.toastrService.show('Error logging in. Something went wrong.', 'Error logging in.',
            {position: 'top-right' as NbGlobalPosition, status: 'danger', duration: 6000});
      });
    });
  }
}
