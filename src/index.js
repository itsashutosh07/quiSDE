// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Header from "./components/Header";
import useLocalStorage from './hooks/useLocalStorage'; // Import the custom hook for localStorage persistence

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme"; // Import the theme

const Main = () => {
  const [themeMode, setThemeMode] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    console.info(`Theme toggled to ${newMode}`);
  };
  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  // Placeholder function for setPrimaryActionType (will be properly implemented later)
  const handleSetPrimaryActionType = (actionType) => {
    console.log(`Primary Action Type set to: ${actionType}`);
    // In later steps, this is where you'd manage state for accent color switching etc.
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyles />
        {/* Pass setPrimaryActionType to Header */}
        <Header
          theme={themeMode}
          toggleTheme={toggleTheme}
          setPrimaryActionType={handleSetPrimaryActionType}
        />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
