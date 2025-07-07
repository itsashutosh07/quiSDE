import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <div
        className="logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img src="/quiz-app-logo.png" alt="QuiSDE logo" />
        <span className="title">QuiSDE</span>
      </div>
      <div className="user-controls">
        <div
          className="user-controls-item"
          onClick={() => navigate("/analytics")}
        >
          <span className="icon-circle">
            <i className="fas fa-chart-line"></i>
          </span>
          <span>Analytics</span>
        </div>
        <div className="user-controls-item" onClick={() => navigate("/demo")}>
          <span className="icon-circle">
            <i className="fas fa-palette"></i>
          </span>
          <span>Demo</span>
        </div>
        <div
          className="user-controls-item"
          onClick={() => alert("Theme toggle coming soon!")}
        >
          <span className="icon-circle">
            <i className="fas fa-moon"></i>
          </span>
          <span>Theme</span>
        </div>
        {authState.isAuthenticated ? (
          <div
            className="user-controls-item user-profile"
            onClick={() => navigate("/profile")}
          >
            <span className="icon-circle">
              <i className="fa-solid fa-user"></i>
            </span>
            <span>Profile</span>
          </div>
        ) : (
          <div
            className="user-controls-item user-profile"
            onClick={() => navigate("/login")}
          >
            <span className="icon-circle">
              <i className="fa-solid fa-sign-in-alt"></i>
            </span>
            <span>Login</span>
          </div>
        )}
        {authState.isAuthenticated && (
          <div className="user-controls-item" onClick={handleLogout}>
            <span className="icon-circle">
              <i className="fa-solid fa-sign-out-alt"></i>
            </span>
            <span>Logout</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
