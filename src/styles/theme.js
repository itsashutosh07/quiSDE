// src/styles/theme.js

export const lightTheme = {
  // Earthy and Pastel Tones for Light Mode
  background: "#f9f5f0", // Very light beige background
  cardBackground: "#ffffff", // White for cards and main content areas
  text: "#4a4a4a", // Dark gray for primary text
  secondaryText: "#717171", // Medium gray for less important text
  primary: "#a7c957", // Pastel green - Primary action color (buttons, links)
  primaryHover: "#6a994e", // Darker green for primary hover
  accent: "#e9c46a", // Mustard yellow - Accent color for highlights
  accentHover: "#e7b448", // Darker mustard for accent hover
  success: "#2a9d8f", // Teal green - Success state color
  successHover: "#1e8a7b", // Darker teal for success hover
  error: "#e76f51", // Burnt orange - Error state color
  errorHover: "#d65a31", // Darker burnt orange for error hover
  padding: "0px",
  borderRadius: "15px", // Slightly more rounded corners
  fontFamily: "'Poppins', sans-serif",
  boxShadow: "0 4px 8px rgba(0,0,0,0.08)", // Subtle shadow for depth
  convexShadow:
    "2px 2px 5px rgba(0,0,0,0.1), -2px -2px 5px rgba(255,255,255,0.8)", // Pronounced raised effect
  convexShadowHover:
    "3px 3px 6px rgba(0,0,0,0.15), -3px -3px 6px rgba(255,255,255,0.8)", // Stronger raised effect on hover
};

export const darkTheme = {
  // Subdued Monochromatic and AMOLED Black for Dark Mode
  background: "#000000", // AMOLED Black Background
  cardBackground: "#1a1a1a", // Very Dark Gray for cards
  text: "#e0e0e0", // Light gray for primary text on dark
  secondaryText: "#a8a8a8", // Medium light gray for secondary text
  primary: "#bf066e", // Vibrant Pink - Primary accent color
  primaryHover: "#d90487", // Brighter Pink for primary hover
  accent: "#6dd5ed", // Bright Teal - Secondary accent color
  accentHover: "#52b6c9", // Darker Teal for accent hover
  success: "#4caf50", // Green - Success state color (standard green works well on dark)
  successHover: "#43a047", // Darker green for success hover
  error: "#f44336", // Red - Error state color (standard red works well on dark)
  errorHover: "#d32f2f", // Darker red for error hover
  padding: "0px",
  borderRadius: "15px",
  fontFamily: "'Poppins', sans-serif",
  boxShadow: "0 4px 8px rgba(0,0,0,0.25)", // More pronounced shadow for dark mode
  convexShadow: "2px 2px 5px #000, -2px -2px 5px #2e2e2e", // Dark convex shadow for dark mode
  convexShadowHover: "3px 3px 6px #000, -3px -3px 6px #3b3b3b", // Stronger dark convex shadow on hover
};
