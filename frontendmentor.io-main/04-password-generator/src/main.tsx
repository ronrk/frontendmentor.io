import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GeneratorContext from "./context/generator-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GeneratorContext>
      <App />
    </GeneratorContext>
  </React.StrictMode>
);
