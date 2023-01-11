import React, { FC } from "react";
import { TContent } from "../../types/IPlanet";

import Wrapper from "./PlanetTabs.styled";

interface IHelper {
  label: string;
  id: TContent;
}

interface IProps {
  onClick: (id: TContent) => void;
  curActive: TContent;
}

const helperArr: IHelper[] = [
  { label: "overview", id: "overview" },
  { label: "internal stracture", id: "internal" },
  { label: "surface geology", id: "surface" },
];

const PlanetsTabs: FC<IProps> = ({ onClick, curActive }) => {
  return (
    <Wrapper className="flex">
      {helperArr.map((btn, idx) => (
        <button
          key={btn.id}
          onClick={() => onClick(btn.id)}
          className={`${
            curActive === btn.id
              ? "active tab ff-spartan fs-600 uppercase"
              : "tab ff-spartan fs-600 uppercase"
          }`}
        >
          <span className="tab-indicator">0{idx + 1}</span> {btn.label}
        </button>
      ))}
    </Wrapper>
  );
};

export default PlanetsTabs;
