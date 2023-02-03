import Image from "next/image";
import React from "react";
import OutroWrapper from "./Outro.wrapper";

const Outro = () => {
  return (
    <OutroWrapper>
      <div className="container flex">
        <div className="content flow flow-space--big">
          <h2 className="heading-2 text-black">
            Bringing you the <br />
            <span className="text-primary">best</span> audio gear
          </h2>
          <p className="text-body text-black-light">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="image__wrapper">
          <Image
            src={"/assets/shared/desktop/image-best-gear.jpg"}
            alt={"best gear"}
            fill
          />
        </div>
      </div>
    </OutroWrapper>
  );
};

export default Outro;
