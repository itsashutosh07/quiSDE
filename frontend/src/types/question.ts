export interface Question {
  id: number;
  text: string;
  type: string; // "multiple_choice", "true_false", "fill_blank"
  difficulty: string; // "easy", "medium", "hard"
  explanation?: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
  explanation?: string;
  orderIndex: number;
}
