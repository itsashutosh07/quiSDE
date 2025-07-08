import React from "react";
import ShinyText from "./ShinyText";

interface HeroProps {
  onModeChange: (mode: "quiz" | "flashcard") => void;
}

const Hero: React.FC<HeroProps> = ({ onModeChange }) => {
  const scrollToSubjects = () => {
    const subjectsSection = document.querySelector(".all-subjects");
    if (subjectsSection) {
      subjectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFlashCards = () => {
    // Switch accent to purple and scroll to subjects
    document.documentElement.style.setProperty("--accent-color", "#8b5cf6");
    // Update logo to purple version
    const logoImg = document.querySelector(".logo img") as HTMLImageElement;
    if (logoImg) {
      logoImg.src = "/purple-logo-quiSDE.png";
    }
    onModeChange("flashcard");
    scrollToSubjects();
  };

  const handleStartQuiz = () => {
    // Switch accent back to red and scroll to subjects
    document.documentElement.style.setProperty("--accent-color", "#d83131");
    // Update logo back to red version
    const logoImg = document.querySelector(".logo img") as HTMLImageElement;
    if (logoImg) {
      logoImg.src = "/quiz-app-logo.png";
    }
    onModeChange("quiz");
    scrollToSubjects();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Master Any Subject</h1>
        <p>
          <ShinyText
            text="Choose between interactive Quizzes or Flash Cards to enhance your learning experience."
            speed={5}
          />
        </p>
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleStartQuiz}>
            Start Quiz
          </button>
          <button className="btn btn-secondary" onClick={handleFlashCards}>
            Try Flash Cards
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
