import { FlashCard } from './flashcard';

export class FlashCardSet {
  name: string;
  description: string;
  dateCreated: Date;
  dateLastEdited: Date;
  public: boolean;
  flashcards: FlashCard[];
}
