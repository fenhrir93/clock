import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModeContext } from "./Mode.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModeContext>
);
