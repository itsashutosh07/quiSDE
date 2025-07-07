import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./index.css";
import "./components/Login.css";
import "./pages/Profile.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
