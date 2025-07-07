import React, { useState } from "react";
import type { Subject } from "../types/subject";
import type { Question } from "../types/question";
import { fetchQuizQuestions } from "../services/quizService";

interface QuizModalProps {
  subject: Subject | null;
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz: (questions: Question[]) => void;
  mode: "quiz" | "flashcard";
}

const QuizModal: React.FC<QuizModalProps> = ({
  subject,
  isOpen,
  onClose,
  onStartQuiz,
  mode,
}) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [questionCount, setQuestionCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !subject) return null;

  const handleStart = async () => {
    setLoading(true);
    setError(null);

    try {
      if (mode === "quiz") {
        const questions = await fetchQuizQuestions({
          subjectSlug: subject.slug,
          difficulty,
          questionCount,
        });
        onStartQuiz(questions);
      } else {
        // For flashcards, we don't need to fetch questions
        onStartQuiz([]);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            Start {mode === "quiz" ? "Quiz" : "Flashcards"}: {subject.name}
          </h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-body">
          {error && (
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "1rem" }}
            >
              {error}
            </div>
          )}

          {mode === "quiz" && (
            <>
              <div className="form-group">
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  disabled={loading}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="questionCount">Number of Questions:</label>
                <select
                  id="questionCount"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  disabled={loading}
                >
                  <option value={5}>5 Questions</option>
                  <option value={10}>10 Questions</option>
                  <option value={15}>15 Questions</option>
                  <option value={20}>20 Questions</option>
                </select>
              </div>
            </>
          )}

          {mode === "flashcard" && (
            <div className="form-group">
              <p>Ready to start flashcards for {subject.name}?</p>
              <p>You'll be presented with {subject.flashcardCount || 0} flashcards to study.</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleStart}
            disabled={loading}
          >
            {loading ? "Loading..." : `Start ${mode === "quiz" ? "Quiz" : "Flashcards"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
