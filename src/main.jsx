import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { useEffect } from "react";
import "./index.css";
import ReactGA from "react-ga";

ReactGA.initialize("G-BEF08EK3TL");

useEffect(() => {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
