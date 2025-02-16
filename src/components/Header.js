// src/components/Header.js
import React from "react";
import styled from "styled-components";
import { FaMoon, FaSun, FaUserCircle, FaCog } from "react-icons/fa"; // User and settings icons
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  position: sticky; /* Make header sticky */
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.cardBackground}; /* Use card background for header */
  color: ${({ theme }) => theme.text};
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100; /* Ensure it's above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit; /* Inherit text color from HeaderContainer */
`;

const Logo = styled.div`
  font-family: "Kode Mono", monospace; /* Use Kode Mono for Logo */
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 15px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px; /* Space between nav links */
  margin-left: 20px; /* Shift nav links more to center */

  @media (max-width: 768px) {
    /* Example responsiveness for smaller screens */
    gap: 20px;
    margin-left: 10px;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-family: "Space Grotesk", sans-serif; /* Use Space Grotesk for nav links */
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 8px 15px;
  border-radius: 8px; /* Slightly rounded nav links */

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
    background-color: rgba(255, 255, 255, 0.05); /* Soft hover background */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
    background-color: rgba(255, 255, 255, 0.1); /* Stronger focus background */
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.4rem; /* Size of user and settings icons */
  color: ${({ theme }) => theme.secondaryText}; /* Muted color for icons */
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.text}; /* Slightly brighter on hover */
  }
`;

const Header = ({
  theme,
  toggleTheme,
  primaryActionText,
  setPrimaryActionType,
}) => {
  // Added props
  const isDark = theme === "dark";

  const handleQuizClick = () => {
    setPrimaryActionType("quiz"); // Set primary action to quiz
  };

  const handleFlashcardClick = () => {
    setPrimaryActionType("flashcard"); // Set primary action to flashcard
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo>QuiSDE</Logo>
      </LogoLink>
      <NavLinks>
        <NavLink onClick={handleQuizClick}>Try Quizzes</NavLink>
        <NavLink onClick={handleFlashcardClick}>Try Flash Cards</NavLink>
      </NavLinks>
      <RightIcons>
        <ThemeToggleButton
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <FaSun size={22} color={theme.accent} />
          ) : (
            <FaMoon size={22} color={theme.primary} />
          )}
        </ThemeToggleButton>
        <IconWrapper aria-label="User Profile">
          <FaUserCircle />
        </IconWrapper>
        <IconWrapper aria-label="Settings">
          <FaCog />
        </IconWrapper>
      </RightIcons>
    </HeaderContainer>
  );
};

export default Header;
