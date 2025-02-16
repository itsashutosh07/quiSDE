// src/components/HeroSection.js
import React, { useState } from "react";
import styled from "styled-components";

const HeroSectionContainer = styled.section`
  background-image: url("/assets/hero-background-dark.jpeg"); /* Path to your background image in public/assets */
  background-size: cover;
  background-position: center;
  color: white; /* Default text color for hero section */
  padding: 120px 0; /* Removed horizontal padding, will span full width */
  text-align: center;
  position: relative; /* For absolute positioning of pseudo-elements or overlays */
  overflow: hidden; /* To contain background and pseudo-elements */
  width: 100%; /* Ensure full width */
  margin-left: 0; /* Ensure no left margin */
  margin-right: 0; /* Ensure no right margin */

  /* Example gradient overlay - adjust colors as needed */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* Darker overlay for better text contrast */
    pointer-events: none; /* Make sure it doesn't interfere with clicks */
  }
`;

const HeroContent = styled.div`
  position: relative; /* To position content above the overlay */
  z-index: 1; /* Ensure content is above the pseudo-element overlay */
  max-width: 960px; /* Maximum width for content */
  margin: 0 auto; /* Center the content */
  padding: 0 20px; /* Add some horizontal padding for content within hero */
`;

const HeroTitle = styled.h1`
  font-family: "Kode Mono", monospace; /* Kode Mono for title */
  font-size: 3.5rem; /* Larger title size */
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3); /* Text shadow for better visibility */
`;

const HeroSubtitle = styled.p`
  /* font-family: 'Space Grotesk', sans-serif;  Removed font-family, will inherit from body */
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #f0f0f0; /* Slightly lighter text for subtitle */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Subtle text shadow */
  max-width: 750px; /* Limit subtitle width for readability */
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; /* Space between buttons */
  margin-top: 20px;

  @media (max-width: 600px) {
    /* Stack buttons on smaller screens */
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

const HeroButton = styled.button`
  font-family: "Kode Mono", monospace; /* Updated to Kode Mono for buttons too */
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 32px; /* Slightly larger buttons */
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: none; /* Remove default border */
  position: relative; /* For gradient overlay effect */
  overflow: hidden; /* Clip the gradient inside button bounds */
  background-color: transparent; /* Default button background transparent */

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  /* Gradient overlay using pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.08)
    ); /* Subtle white gradient */
    opacity: 0.6; /* Adjust opacity for desired effect */
    pointer-events: none; /* Ensure overlay doesn't block interactions */
  }
`;

const StartQuizButton = styled(HeroButton)`
  /* Duotone Red Gradient */
  /* Gradient Background for default state */
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primary},
    #ff4040
  );

  &:hover {
    /* Darken the gradient slightly on hover */
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.primaryHover},
      #f23a3a
    );
  }

  /* Style for when NOT selected (e.g., Flashcards is selected) - Gradient Outline */
  &.outlined {
    background-image: none; /* Remove gradient background */
    background-color: transparent; /* Make background transparent */
    border: 2px solid ${({ theme }) => theme.primary}; /* Add gradient outline */
    color: ${({ theme }) => theme.text}; /* Ensure text is visible */
    &::before {
      /* Ensure no overlay for outline style */
      content: none;
    }
  }
`;

const TryFlashcardsButton = styled(HeroButton)`
  /* Duotone Violet Gradient */
  /* Gradient Background for default state */
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.accent},
    #a0f
  ); /* Example Violet gradient - adjust colors */

  &:hover {
    /* Darken the gradient slightly on hover */
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.accentHover},
      #90f
    ); /* Darker violet */
  }

  /* Style for when NOT selected (e.g., Quiz is selected) - Gradient Outline */
  &.outlined {
    background-image: none; /* Remove gradient background */
    background-color: transparent; /* Make background transparent */
    border: 2px solid ${({ theme }) => theme.accent}; /* Add gradient outline */
    color: ${({ theme }) => theme.text}; /* Ensure text is visible */
    &::before {
      /* Ensure no overlay for outline style */
      content: none;
    }
  }
`;

const HeroSection = (props) => {
  // Receive props
  const [selectedType, setSelectedType] = useState("quiz"); // Default to 'quiz' selected

  const scrollToSubjects = () => {
    const subjectSection = document.getElementById("subject-section");
    if (subjectSection) {
      subjectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleButtonClick = (type) => {
    setSelectedType(type);
    props.setAccentColor(type === "quiz" ? "red" : "purple"); // Set accent color
    scrollToSubjects(); // Scroll to subjects

    console.log(`Button Clicked: ${type}`); // Log which button is clicked
  };

  return (
    <HeroSectionContainer>
      <HeroContent>
        <HeroTitle>Master Any Subject</HeroTitle>
        <HeroSubtitle>
          Choose between interactive quizzes or flash cards to enhance your
          learning experience.
        </HeroSubtitle>
        <HeroButtons>
          <StartQuizButton
            onClick={() => handleButtonClick("quiz")}
            className={selectedType === "quiz" ? "" : "outlined"} // Apply 'outlined' if NOT quiz
          >
            Start Quiz
          </StartQuizButton>
          <TryFlashcardsButton
            onClick={() => handleButtonClick("flashcard")}
            className={selectedType === "flashcard" ? "" : "outlined"} // Apply 'outlined' if NOT flashcard
          >
            Try Flash Cards
          </TryFlashcardsButton>
        </HeroButtons>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
