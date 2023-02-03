import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import LinkButton from "../../ui/LinkButton";

interface IProps {
  name: string;
  path: string;
  imageSrc: string;
  style: "primary" | "secondary" | "seperate";
}

const SingleProduct: FC<IProps> = ({ name, path, imageSrc, style }) => {
  return (
    <section className={`product-section ${style}`}>
      <div className="image__wrapper product__image">
        <Image src={imageSrc} alt={name} fill />
        <div className="image__wrapper bg__image">
          <Image
            src={"/assets/home/desktop/pattern-circles.svg"}
            alt={""}
            fill
          />
        </div>
      </div>
      <div
        className={
          style === "seperate" ? "content flex-col bg-gray" : "content flex-col"
        }
      >
        <h2
          className={
            style === "primary"
              ? "text-white heading-1"
              : "text-black heading-3"
          }
        >
          {name}
        </h2>
        <p className="text-body text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <LinkButton
          path="/"
          color={style === "primary" ? "black" : "transparent"}
        >
          see product
        </LinkButton>
      </div>
    </section>
  );
};

export default SingleProduct;
