import React, { useState } from "react";
import { Navbar, Cart, LightboxGallery, Sidebar } from "./Components";
import SingleProductPage from "./pages/SingleProductPage";

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleGallery = () => {
    setShowGallery((prev) => !prev);
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

      <LightboxGallery
        toggleGallery={toggleGallery}
        showGallery={showGallery}
      />
      <main
        className={showGallery || showSidebar ? "overlay" : null}
        onClick={() => {
          if (showGallery) {
            setShowGallery(false);
          }
        }}
      >
        <Cart />
        <SingleProductPage toggleGallery={toggleGallery} />
      </main>
    </div>
  );
};

export default App;
