// src/styles/GlobalStyles.js
import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');

  /* CSS Reset and Base Styling */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Kode Mono', monospace; /* Use Kode Mono for body */
    line-height: 1.7; /* Improved line height for readability */
    /* padding: ${({ theme }) => theme.padding};  Removed padding from here */
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out; /* Smoother transitions */
    animation: ${fadeIn} 0.6s ease-out; /* Slightly longer fade-in */
    font-weight: 400; /* Default font weight */
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) =>
      theme.text}; /* Ensure headings also use theme text color */
    font-family: 'Kode Mono', monospace; /* Use Kode Mono for headings too */
    font-weight: 700; /* Stronger font weight for headings */
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) =>
      theme.secondaryText}; /* Use secondary text color for paragraphs */
  }

  a {
    color: ${({ theme }) => theme.text}; /* Primary color for links */
    text-decoration: none;
    font-weight: 600; /* Slightly bolder links */
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primaryHover}; /* Hover color for links */
      text-decoration: nono;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 12px 24px; /* Standard button padding */
    font-size: 1rem;
    font-weight: 600;
    box-shadow: ${({ theme }) =>
      theme.convexShadow}; /* Apply convex shadow to buttons */
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s ease, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: translateY(-2px); /* Slight lift on hover */
      box-shadow: ${({ theme }) =>
        theme.convexShadowHover}; /* Stronger convex shadow on hover */
    }

    &:active {
      transform: translateY(0); /* No lift when active/pressed */
      box-shadow: ${({ theme }) =>
        theme.convexShadow}; /* Revert to base convex shadow when active */
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7; /* Indicate disabled state */
    }
  }

  /* Card Styling - Reusable card style */
  .card {
    background: ${({ theme }) => theme.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.padding};
    box-shadow: ${({ theme }) =>
      theme.convexShadow}; /* Apply convex shadow to cards */
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: ${({ theme }) =>
        theme.convexShadowHover}; /* Stronger convex shadow on card hover */
    }
  }

  /* Input Styling - Basic input style if needed */
  input[type="text"],
  input[type="email"],
  input[type="password"],
  textarea,
  select {
    font-family: inherit;
    font-size: 1rem;
    padding: 10px 15px;
    border: 2px solid ${({ theme }) =>
      theme.secondaryText}; /* Subdued border color */
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    outline: none;

    &:focus {
      border-color: ${({ theme }) =>
        theme.primary}; /* Primary border on focus */
      box-shadow: 0 0 0 2px ${({ theme }) =>
        theme.primary}; /* Subtle focus ring */
    }
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem; /* Standard list indentation */
  }

  code {
    font-family: monospace;
    padding: 0.2rem 0.5rem;
    background: ${({ theme }) =>
      theme.cardBackground}; /* Code block background */
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.accent}; /* Accent color for code text */
  }

  /* Utility classes for spacing and layout can be added here */

`;
