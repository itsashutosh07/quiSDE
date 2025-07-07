export interface Quiz {
  id: number;
  subjectId: number;
  title: string;
  difficulty: string; // Easy, Medium, Hard
  numQuestions: number;
}
