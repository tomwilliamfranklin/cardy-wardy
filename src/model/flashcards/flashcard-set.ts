import { FlashCard } from './flashcard';

export class FlashCardSet {
  title: string;
  description: string;
  dateCreated: Date = new Date();
  dateLastUpdated: Date = new Date();
  published: boolean = true;
  author: number = 1; // TODO
  flashcards: FlashCard[];
}
