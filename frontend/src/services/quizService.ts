import type { Quiz } from "../types/quiz";
import type { Question } from "../types/question";

export async function fetchQuizzes(): Promise<Quiz[]> {
  const response = await fetch("/api/quizzes");
  if (!response.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return response.json();
}

export async function fetchQuizWithQuestions(quizId: number): Promise<Quiz> {
  const response = await fetch(`/api/quizzes/${quizId}/questions`);
  if (!response.ok) {
    throw new Error("Failed to fetch quiz questions");
  }
  return response.json();
}

export async function submitQuizAttempt(
  quizId: number,
  answers: Record<number, number>,
  timeSpentSeconds: number
) {
  const response = await fetch(`/api/quizzes/${quizId}/attempt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers, timeSpentSeconds }),
  });
  if (!response.ok) {
    throw new Error("Failed to submit quiz attempt");
  }
  return response.json();
}

export interface QuizRequest {
  subjectSlug: string;
  difficulty: string;
  questionCount: number;
}

export async function fetchQuizQuestions(
  request: QuizRequest
): Promise<Question[]> {
  const response = await fetch(
    `/api/quizzes/questions?subjectSlug=${request.subjectSlug}&difficulty=${request.difficulty}&count=${request.questionCount}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch quiz questions");
  }
  return response.json();
}
