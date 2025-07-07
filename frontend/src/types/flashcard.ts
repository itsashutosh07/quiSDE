export interface Flashcard {
  id: number;
  subjectId: number;
  frontText: string;
  backText: string;
  imageUrl?: string;
  codeBlock?: string;
}
