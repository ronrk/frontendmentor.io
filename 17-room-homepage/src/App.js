import React from "react";
import HomePage from "./pages/HomePage";
import { Header } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
