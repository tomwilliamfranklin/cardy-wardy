import { FlashCard } from './flashcard';

export class FlashCardSet {
  title: string;
  description: string;
  dateCreated: Date;
  dateLastEdited: Date;
  public: boolean;
  flashcards: FlashCard[];
}
