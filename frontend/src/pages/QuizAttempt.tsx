import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchQuizWithQuestions,
  submitQuizAttempt,
} from "../services/quizService";
import type { Quiz } from "../types/quiz";
import type { Question } from "../types/question";
import type { Answer } from "../types/answer";

interface QuizAttemptResult {
  quizId: number;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  questionResults: Record<number, boolean>;
  feedback: string[];
}

const QuizAttempt: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<QuizAttemptResult | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    if (!quizId) return;
    setLoading(true);
    fetchQuizWithQuestions(Number(quizId))
      .then((data) => {
        setQuiz(data);
        setQuestions(data.questions || []);
        setStartTime(Date.now());
      })
      .finally(() => setLoading(false));
  }, [quizId]);

  const handleSelect = (questionId: number, answerId: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handlePrev = () => setCurrent((c) => Math.max(0, c - 1));
  const handleNext = () =>
    setCurrent((c) => Math.min(questions.length - 1, c + 1));

  const handleSubmit = async () => {
    setSubmitting(true);
    const timeSpentSeconds = Math.floor((Date.now() - startTime) / 1000);
    try {
      const res = await submitQuizAttempt(
        Number(quizId),
        answers,
        timeSpentSeconds
      );
      setResult(res);
    } catch (e) {
      alert("Failed to submit quiz. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading quiz...</div>;
  if (!quiz || questions.length === 0)
    return (
      <div className="text-center py-8">
        Quiz not found or has no questions.
      </div>
    );

  if (result) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p className="mb-2">
          Score:{" "}
          <span className="font-bold">
            {result.correctAnswers} / {result.totalQuestions}
          </span>{" "}
          ({result.scorePercentage.toFixed(1)}%)
        </p>
        <p className="mb-2">Time Spent: {result.timeSpentSeconds} seconds</p>
        <ul className="mb-4">
          {result.feedback.map((msg, i) => (
            <li key={i} className="text-green-700">
              {msg}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[current];
  // @ts-ignore: answers property may be injected by backend
  const qAnswers: Answer[] = q.answers || [];

  return (
    <div className="container mx-auto py-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      <div className="mb-6">
        <div className="mb-2 font-semibold">
          Question {current + 1} of {questions.length}
        </div>
        <div className="mb-4 text-lg">{q.text}</div>
        {q.imageUrl && (
          <img src={q.imageUrl} alt="Question" className="mb-4 max-h-48" />
        )}
        {q.codeBlock && (
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>{q.codeBlock}</code>
          </pre>
        )}
        <div className="flex flex-col gap-2">
          {qAnswers.map((a) => (
            <label
              key={a.id}
              className={`border rounded p-2 cursor-pointer flex items-center gap-2 ${
                answers[q.id] === a.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name={`q-${q.id}`}
                value={a.id}
                checked={answers[q.id] === a.id}
                onChange={() => handleSelect(q.id, a.id)}
                className="mr-2"
              />
              <span>{a.text}</span>
              {a.imageUrl && (
                <img src={a.imageUrl} alt="Answer" className="h-6 ml-2" />
              )}
              {a.codeBlock && (
                <pre className="bg-gray-50 p-1 rounded ml-2">
                  <code>{a.codeBlock}</code>
                </pre>
              )}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={current === 0}
        >
          Previous
        </button>
        {current < questions.length - 1 ? (
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={
              submitting || Object.keys(answers).length < questions.length
            }
          >
            {submitting ? "Submitting..." : "Submit Quiz"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizAttempt;
