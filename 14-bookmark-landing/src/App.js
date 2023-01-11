import React from "react";
import {
  Navbar,
  Hero,
  FAQ,
  Features,
  Footer,
  Downloads,
  Contact,
} from "./components";

const App = () => {
  return (
    <div className="app bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Downloads />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
