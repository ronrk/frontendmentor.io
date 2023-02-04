import React, { FC } from "react";
import ProductFeatureWrapper from "./ProductFeature.wrapper";

interface IINclude {
  quantity: number;
  item: string;
}

interface IProps {
  features: string;
  includes: IINclude[];
}

const ProductFeatures: FC<IProps> = ({ features, includes }) => {
  return (
    <ProductFeatureWrapper className="flex">
      <div className="features flow">
        <h3 className="heading-3 text-black">features</h3>
        {features.split("\n").map((feature, idx) => (
          <p key={idx}>{feature}</p>
        ))}
      </div>
      <div className="in-box flow">
        <h3 className="heading-3 text-black">in the box</h3>
        <ul className="flex-col">
          {includes.map((item, idx) => (
            <li key={idx} className="flex text-black-light text-body">
              <span className="quantity text-primary heading-6">
                {item.quantity}x
              </span>
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </ProductFeatureWrapper>
  );
};

export default ProductFeatures;
