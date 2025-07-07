import React, { useState } from "react";
import type { Subject } from "../types/subject";
import type { Question } from "../types/question";
import QuizModal from "./QuizModal";

interface SubjectGridProps {
  subjects: Subject[];
  mode: "quiz" | "flashcard";
}

const SubjectGrid: React.FC<SubjectGridProps> = ({ subjects, mode }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTrySubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const handleStartQuiz = (questions: Question[]) => {
    // Navigate to quiz with questions
    console.log("Starting quiz with questions:", questions);
    // For now, just show an alert. Later we'll navigate to a quiz page
    alert(`Starting quiz with ${questions.length} questions!`);
  };

  const handleStartFlashcards = () => {
    // Navigate to flashcards
    console.log("Starting flashcards for:", selectedSubject?.name);
    alert(`Starting flashcards for ${selectedSubject?.name}!`);
  };

  return (
    <section className="all-subjects">
      <h2>All Subjects:</h2>
      <div className="subject-grid">
        {subjects.map((subject) => (
          <div className="subject-item" key={subject.slug}>
            <div className="subject-image-container">
              <img
                src={subject.imageUrl || "/subject-placeholder-dark.jpeg"}
                alt={subject.name}
              />
            </div>
            <div className="subject-text-container">
              <h3>{subject.name}</h3>
              <p>{subject.description}</p>
              <div className="subject-footer">
                <p className="quiz-count">
                  {mode === "quiz" 
                    ? `${subject.quizCount || 0} quizzes available`
                    : `${subject.flashcardCount || 0} flashcards available`
                  }
                </p>
                <button
                  className="btn btn-start"
                  onClick={() => handleTrySubject(subject)}
                >
                  try
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <QuizModal
        subject={selectedSubject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartQuiz={mode === "quiz" ? handleStartQuiz : handleStartFlashcards}
        mode={mode}
      />
    </section>
  );
};

export default SubjectGrid;
