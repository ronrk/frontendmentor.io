import React, { useState } from "react";
import {
  Navbar,
  HeaderHero,
  Features,
  Articles,
  Footer,
  MobileMenu,
} from "./Components";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <Navbar toggleMenu={toggleMenuHandler} showMenu={isMenuOpen} />
      <MobileMenu showMenu={isMenuOpen} />
      <main
        className={isMenuOpen ? "app-container overlay" : "app-container"}
        onClick={closeMenu}
      >
        <HeaderHero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
};

export default App;
