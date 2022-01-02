import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import { AppProvider } from "./context/app";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
