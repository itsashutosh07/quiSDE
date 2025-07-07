import React from "react";

const Footer: React.FC = () => (
  <footer>
    <div className="footer-logo">
      <img src="/quiz-app-logo.png" alt="QuiSDE logo" />
      <span className="title"> QuiSDE</span>
    </div>
    <div className="footer-links">
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </footer>
);

export default Footer;
