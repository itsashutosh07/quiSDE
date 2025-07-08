import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Profile.css";
import SubjectPng from "../assets/Subject.png";
import IconPattern from "../assets/Icon Pattern.png";
import GrainWebp from "../assets/Grain.webp";
import CountUp from "../components/CountUp";

const Profile: React.FC = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate("/login");
    }
  }, [authState.isAuthenticated, navigate]);

  const handleContactClick = () => {
    console.log("Contact clicked");
    // You can implement contact functionality here
    alert("Contact functionality coming soon!");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!authState.isAuthenticated || !authState.user) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-header">
            <h1>Profile</h1>
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </button>
          </div>

          <div className="profile-card-container">
            <ProfileCard
              name={authState.user.name}
              title={authState.user.title}
              handle={authState.user.handle}
              status={authState.user.status}
              contactText="Share"
              avatarUrl={SubjectPng}
              iconUrl={IconPattern}
              grainUrl={GrainWebp}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>

          <div className="profile-info">
            <div className="info-section">
              <h2>Account Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Email:</label>
                  <span>{authState.user.email}</span>
                </div>
                <div className="info-item">
                  <label>Name:</label>
                  <span>{authState.user.name}</span>
                </div>
                <div className="info-item">
                  <label>Title:</label>
                  <span>{authState.user.title}</span>
                </div>
                <div className="info-item">
                  <label>Handle:</label>
                  <span>@{authState.user.handle}</span>
                </div>
                <div className="info-item">
                  <label>Status:</label>
                  <span
                    className={`status ${authState.user.status.toLowerCase()}`}
                  >
                    {authState.user.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Learning Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">
                    <span className="gradient-text">
                      <CountUp
                        from={0}
                        to={25}
                        duration={1.2}
                        className="count-up-text"
                      />
                    </span>
                  </div>
                  <div className="stat-label">Quizzes Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <span className="gradient-text">
                      <CountUp
                        from={0}
                        to={92}
                        duration={1.2}
                        className="count-up-text"
                      />
                      %
                    </span>
                  </div>
                  <div className="stat-label">Average Score</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <span className="gradient-text">
                      <CountUp
                        from={0}
                        to={8}
                        duration={1.2}
                        className="count-up-text"
                      />
                    </span>
                  </div>
                  <div className="stat-label">Subjects Mastered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <span className="gradient-text">
                      <CountUp
                        from={0}
                        to={156}
                        duration={1.2}
                        className="count-up-text"
                      />
                    </span>
                  </div>
                  <div className="stat-label">Hours Studied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
