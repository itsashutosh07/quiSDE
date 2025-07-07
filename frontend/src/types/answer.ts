export interface Answer {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  imageUrl?: string;
  codeBlock?: string;
}
