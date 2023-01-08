import React, { FC } from "react";
import { TContent } from "../../types/IPlanet";

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
    <div className="planet-tabs flex">
      {helperArr.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onClick(btn.id)}
          className={`${
            curActive === btn.id
              ? "active tab ff-spartan fs-600 uppercase"
              : "tab ff-spartan fs-600 uppercase"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default PlanetsTabs;
