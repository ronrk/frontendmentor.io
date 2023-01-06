import { checkboxData } from "../utils/const";
import { useGeneratorContext } from "../context/generator-context";
import { Extras } from "../Types/types";
import iconCheck from "../assets/images/icon-check.svg";

import Wrapper from "./styles/Checkbox.styled";

const Checkbox = () => {
  const generator = useGeneratorContext()?.generator;
  const changeGenerator = useGeneratorContext()?.changeGenerator;

  const handleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: Extras
  ) => {
    const { name, checked } = e.target;
    changeGenerator?.(name, item.id, checked, item);
  };

  const el = checkboxData.map((item) => {
    let selected = generator?.extraAdditions.find(
      (selected) => selected.id === item.id
    );

    return (
      <div className="form-checkbox flex" key={item.id}>
        <input
          type="checkbox"
          onChange={(e) => handleChecked(e, item)}
          name="extraAdditions"
          checked={selected ? true : false}
          id={item.value}
        />
        {selected ? (
          <img src={iconCheck} alt="check" className="check-icon" />
        ) : null}
        <label htmlFor={item.value} className="text-white ">
          {item.value}
        </label>
      </div>
    );
  });

  return <Wrapper className="form-control flex-col fs-100">{el}</Wrapper>;
};

export default Checkbox;
