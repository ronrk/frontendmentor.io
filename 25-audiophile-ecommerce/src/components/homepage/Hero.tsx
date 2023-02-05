import Image from "next/image";
import React from "react";
import LinkButton from "../ui/LinkButton";
import HeroWrapper from "./Hero.wrapper";

const Hero = () => {
  return (
    <HeroWrapper className="bg-black text-white">
      <div className="container">
        <div className="hero bg-black-light">
          <div className="content bg-black flex-col">
            <p className="text-overline text-gray-light">new product</p>
            <h1 className="heading-1">XX99 Mark II headphones</h1>
            <p className="text-body text-gray">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <LinkButton
              color="primary"
              path="/products/xx99-mark-two-headphones"
            >
              see product
            </LinkButton>
          </div>
          <div className="image__wrapper">
            <Image src={"/assets/home/desktop/image-hero.jpg"} alt={""} fill />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
