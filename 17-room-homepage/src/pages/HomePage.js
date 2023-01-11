import React, { useState } from "react";
import { Hero, InfoSection } from "../components";

import Wrapper from "./HomePage.styled";

import img1 from "../images/desktop-image-hero-1.jpg";
import img2 from "../images/desktop-image-hero-2.jpg";
import img3 from "../images/desktop-image-hero-3.jpg";

const sliders = [
  {
    img: img1,
    title: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    img: img2,
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    img: img3,
    title: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
];

const HomePage = () => {
  const [selectedId, setSelectedId] = useState(0);

  const nextSlide = () => {
    setSelectedId((prev) => {
      if (prev === sliders.length - 1) return 0;
      return prev + 1;
    });
  };
  const prevSlide = () => {
    setSelectedId((prev) => {
      if (prev === 0) return sliders.length - 1;
      return prev - 1;
    });
  };

  return (
    <Wrapper>
      <Hero
        {...sliders[selectedId]}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <InfoSection />
    </Wrapper>
  );
};

export default HomePage;
