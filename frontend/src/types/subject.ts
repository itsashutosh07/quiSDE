export interface Subject {
  slug: string;
  name: string;
  categories: string[]; // e.g., ["core", "advanced", "machine-learning", etc.]
  description: string;
  imageUrl?: string;
  quizCount: number;
  flashcardCount: number;
}

export interface Category {
  id: string;
  name: string;
}
