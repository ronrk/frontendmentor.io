import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <hr className="container" />
      <Skills />
      <hr className="container" />
      <Projects />
      <Contact />

      <Navbar className="bg-gray pb-3" />
    </div>
  );
};

export default App;
