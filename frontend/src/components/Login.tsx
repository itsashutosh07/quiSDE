import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "./Header";

const Login: React.FC = () => {
  const { authState, login, verifyOTP, resendOTP, resetOTP } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/profile");
    }
  }, [authState.isAuthenticated, navigate]);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [resendCountdown]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      setShowOTP(true);
    }
  };

  const handleOTPVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await verifyOTP({ email, otp });
    if (success) {
      navigate("/profile");
    }
  };

  const handleResendOTP = async () => {
    setResendDisabled(true);
    setResendCountdown(30);
    await resendOTP(email);
  };

  const handleBackToLogin = () => {
    resetOTP();
    setOtp("");
  };

  if (authState.isLoading) {
    return (
      <>
        <Header />
        <div className="login-container">
          <div className="login-card">
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome to QuiSDE</h1>
            <p>Sign in to continue your learning journey</p>
          </div>

          {!authState.otpSent ? (
            <form onSubmit={handleLogin} className="login-form">
              {authState.error && (
                <div className="error-message">{authState.error}</div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={authState.isLoading}
              >
                {authState.isLoading ? "Signing In..." : "Sign In"}
              </button>

              <div className="demo-credentials">
                <p>
                  <strong>Demo Credentials:</strong>
                </p>
                <p>Email: itsashutosh07@gmail.com</p>
                <p>Password: quisde@123</p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOTPVerification} className="otp-form">
              {authState.error && (
                <div className="error-message">{authState.error}</div>
              )}

              <div className="otp-header">
                <h2>Verify OTP</h2>
                <p>We've sent a verification code to {email}</p>
              </div>

              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                  className="form-input otp-input"
                />
                <p className="otp-hint">Demo OTP: 888888</p>
              </div>

              <div className="otp-actions">
                <button
                  type="submit"
                  className="verify-btn"
                  disabled={authState.isLoading}
                >
                  {authState.isLoading ? "Verifying..." : "Verify OTP"}
                </button>

                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={resendDisabled}
                  className="resend-btn"
                >
                  {resendDisabled
                    ? `Resend in ${resendCountdown}s`
                    : "Resend OTP"}
                </button>
              </div>

              <button
                type="button"
                onClick={handleBackToLogin}
                className="back-btn"
              >
                ← Back to Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
