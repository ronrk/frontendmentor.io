import React, { useState, useEffect, useRef, FC } from "react";
import { GoChevronDown } from "react-icons/go";
import { IDropdownValue } from "../Form/Form";
import Wrapper from "./Dropdown.styled";

interface IProps {
  onChange: (param: any) => void;
  value: IDropdownValue | null;
  options: IDropdownValue[];
}
const initlizeCols = (arr: IDropdownValue[]) => {
  return arr.map((col) => col.title);
};

const Dropdown: FC<IProps> = ({ onChange, value, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(event: any) {
      if (!divEl.current) {
        return;
      }
      if (event.target === null) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: IDropdownValue) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map(
    (option: IDropdownValue): React.ReactNode => {
      return (
        <div
          className={
            value?.id === option.id
              ? "dropdown-option fs-600 text-dark active"
              : "dropdown-option fs-600 text-dark"
          }
          onClick={() => handleOptionClick(option)}
          key={option.id}
        >
          {option.title}
          <span>{option.price}</span>
        </div>
      );
    }
  );

  return (
    <Wrapper ref={divEl} className="columns-type fs-600 bg-secondary">
      <div className="dropdown-bar bg-gray text-dark" onClick={handleClick}>
        <div className="content text-white">
          {!value ? "choose" : value.title}
          {!value ? null : <span>{value.price}</span>}
        </div>

        <GoChevronDown className="icon text-white" />
      </div>
      {isOpen && (
        <div className="dropdown-options bg-white">{renderedOptions}</div>
      )}
    </Wrapper>
  );
};

export default Dropdown;
