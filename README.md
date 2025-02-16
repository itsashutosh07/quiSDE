# QuiSDE : A Modern Learning App for Software Development Engineers

A beautifully designed interactive quiz app with a clean, minimal, and engaging interface—perfect for self-assessment and quick learning sessions!

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

---

## Introduction

The **Quiz App** is a modern web application built with React, React Router, and styled-components. Designed with both functionality and aesthetics in mind, this app offers an engaging way for students to test their knowledge through interactive quizzes. Whether you’re revising concepts or challenging yourself, the Quiz App provides immediate feedback with a detailed breakdown of your performance.

---

## Features

- **Interactive Quizzes:**

  - Each quiz consists of 5 carefully curated questions.
  - One question is displayed at a time with a clear, intuitive **Next** button for seamless navigation.

- **Detailed Recap:**

  - Receive a comprehensive breakdown of your performance at the end of each quiz.
  - Instantly see which questions you got right or wrong.

- **User Dashboard:**

  - Keep track of your progress over time.
  - View a history of your quiz attempts and scores, stored locally in your browser.

- **Modern UI/UX:**

  - Clean, minimal design with consistent padding, subtle colors, and thoughtfully placed icons.
  - Fully responsive layout ensuring an optimal experience on both desktop and mobile devices.

- **Local Storage Integration:**
  - Quiz results are securely saved in your browser, allowing you to review your performance even after closing the app.

---

## Installation

### Prerequisites

- **Node.js** (preferably version 18)
- **npm**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## Usage

- **Home Page:**
  - Select your subject to begin a quiz.

- **Quiz Interface:**
  - Answer one question at a time. After the final question, view a detailed recap of your performance.

- **Dashboard:**
  - Check your past quiz attempts, complete with scores and timestamps.


## Project Structure

Check your past quiz attempts, complete with scores and timestamps.


```plaintext
quiz-app/
├── README.md                # Project overview, instructions, and documentation.
├── node_modules/            # Installed dependencies (managed by npm).
├── package-lock.json        # Lock file ensuring reproducible builds.
├── package.json             # Project configuration, scripts, and dependency definitions.
├── public/                  # Static assets and HTML template.
│   ├── favicon.ico
│   ├── index.html           # Main HTML file used as the entry point.
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src/                     # All source code for the application.
    ├── App.css              # Global CSS for the main App component.
    ├── App.js               # Main App component; includes routing, lazy loading, error boundaries.
    ├── App.test.js          # Tests for the App component.
    ├── assets/              # Static assets (images, fonts, icons, etc.).
    ├── components/          # Reusable UI components.
    │   ├── ErrorBoundary.js # Catches and logs errors in the component tree.
    │   └── Loading.js       # Fallback UI shown while lazy-loaded components are being fetched.
    ├── data/                # Static data files.
    │   └── quizData.js      # Quiz questions and answers.
    ├── hooks/               # Custom React hooks for encapsulating business logic.
    │   ├── useLocalStorage.js  # Manages localStorage read/write logic.
    │   └── useQuiz.js       # Handles quiz state, progression, and scoring.
    ├── index.css            # Global CSS resets and styling.
    ├── index.js             # Application entry point; renders App inside BrowserRouter.
    ├── logo.svg             # Example logo asset.
    ├── pages/               # Page-level components corresponding to app routes.
    │   ├── Dashboard.js     # Displays the user's quiz history.
    │   ├── Home.js          # Landing page for subject selection.
    │   ├── Quiz.js          # Main quiz interface; uses the useQuiz hook.
    │   └── Recap.js         # Provides a detailed recap of quiz performance.
    ├── reportWebVitals.js   # Performance measurement utilities.
    ├── services/            # Business logic and side-effect handlers.
    │   └── quizService.js   # Manages saving and retrieving quiz results via localStorage.
    ├── setupTests.js        # Test configuration and setup.
    ├── styles/              # Styled-components and theme definitions.
    │   ├── GlobalStyles.js  # Global styles and CSS resets.
    │   └── theme.js         # Theming and design tokens for the app.
    └── utils/               # Utility functions.
        └── logger.js        # Logging utility (logInfo, logWarn, logError) for debugging.
```
