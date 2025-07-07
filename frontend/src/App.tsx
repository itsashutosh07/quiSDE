import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizSelect from "./pages/QuizSelect";
import QuizAttempt from "./pages/QuizAttempt";
import DesignDemo from "./pages/DesignDemo";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizSelect />} />
        <Route path="/quiz/:quizId" element={<QuizAttempt />} />
        <Route path="/demo" element={<DesignDemo />} />
        {/* Add more routes here as you scaffold more pages */}
      </Routes>
    </Router>
  );
};

export default App;
