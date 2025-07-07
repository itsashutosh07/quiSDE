import React, { useEffect, useState } from "react";
import type { Quiz } from "../types/quiz";
import { fetchQuizzes } from "../services/quizService";

const QuizSelect: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuizzes()
      .then(setQuizzes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Select a Quiz</h1>
      {loading && <p>Loading quizzes...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
            <p className="text-gray-600 mb-2">{quiz.difficulty}</p>
            <p className="mb-2">Questions: {quiz.numQuestions}</p>
            <p className="mb-2">Subject: {quiz.subject.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelect;
