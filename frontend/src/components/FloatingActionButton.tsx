import React, { useState } from "react";

interface FloatingActionButtonProps {
  onToggle: () => void;
  isOpen: boolean;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onToggle,
  isOpen,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fab-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`fab ${isOpen ? "fab-open" : ""}`}
        onClick={onToggle}
        aria-label="Toggle quick actions"
      >
        <div className="fab-icon">
          <i className={`fas ${isOpen ? "fa-times" : "fa-plus"}`}></i>
        </div>
        <div className="fab-ripple"></div>
      </button>

      {isHovered && (
        <div className="fab-tooltip">
          <span>Quick Actions</span>
          <div className="fab-tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
