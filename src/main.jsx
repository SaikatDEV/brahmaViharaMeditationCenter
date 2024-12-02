import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/700.css"; // Weight 700
import "@fontsource/lobster"; // Defaults to regular style

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
