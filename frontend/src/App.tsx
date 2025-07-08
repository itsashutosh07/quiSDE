import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/Login";
import Profile from "./pages/Profile";
import QuizSelect from "./pages/QuizSelect";
import QuizAttempt from "./pages/QuizAttempt";
import DesignDemo from "./pages/DesignDemo";
import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<QuizSelect />} />
        <Route path="/quiz/:quizId" element={<QuizAttempt />} />
        <Route path="/demo" element={<DesignDemo />} />
        {/* Add more routes here as you scaffold more pages */}
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
