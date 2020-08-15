import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbToastrService, NbGlobalPosition } from '@nebular/theme';
import { FlashCardSet } from '../model/flashcards/flashcard-set';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
}
