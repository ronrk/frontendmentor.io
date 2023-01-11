import React from "react";
import Wrapper from "./styles/Strength.styled";
import { useGeneratorContext } from "../context/generator-context";

const helperArray = [1, 2, 3, 4];

const Strength = () => {
  const generator = useGeneratorContext()?.generator;
  const changeGenerator = useGeneratorContext()?.changeGenerator;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    changeGenerator?.(name, value, true, []);
  };

  return (
    <Wrapper className="form-control bg-gray-dark-2 flex">
      <h3 className="fs-100 text-gray uppercase">strength</h3>

      <div className="strength-wrapper flex">
        <label htmlFor="" className="uppercase text-white fs-200">
          {generator?.strength === 1
            ? "too weak!"
            : generator?.strength === 2
            ? "week"
            : generator?.strength === 3
            ? "medium"
            : "strong"}
        </label>
        <input
          type="range"
          min="1"
          max="4"
          value={generator?.strength}
          onChange={handleChange}
          name="strength"
        />
        <div className="strenth-slider">
          {helperArray.map((value) => {
            let selected: boolean = value <= (generator?.strength || 0);
            let color: string = "bg-orange";
            if (generator?.strength === 1) {
              color = "bg-red";
            }
            if ((generator?.strength || 1) > 2) {
              color = "bg-yellow";
            }
            if ((generator?.strength || 1) > 3) {
              color = "bg-green";
            }
            return (
              <div
                className={
                  selected ? `strength-box selected ${color}` : "strength-box"
                }
                key={value}
                onClick={() => {
                  changeGenerator?.("strength", value, false, []);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Strength;
