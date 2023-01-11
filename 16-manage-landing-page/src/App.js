import React from "react";
import {
  Header,
  Hero,
  MainSection,
  TestimonialsContainer,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <MainSection />
      <TestimonialsContainer />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
