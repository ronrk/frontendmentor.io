import React, { useState, useEffect, useRef, FC, LegacyRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { IDropdownOption } from "../../types/IDropdown";
import Wrapper from "./Dropdown.styled";
// import Panel from './Panel';

interface IProps {
  onChange: (param: any) => void;
  options: IDropdownOption[];
  value: IDropdownOption | null;
}

const Dropdown: FC<IProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);
  const defaultSelection = {
    label: "none",
    value: "none",
  };

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

  const handleOptionClick = (option: IDropdownOption) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map(
    (option: IDropdownOption): React.ReactNode => {
      return (
        <div
          className={
            value?.value === option.value
              ? "dropdown-option active"
              : "dropdown-option"
          }
          onClick={() => handleOptionClick(option)}
          key={option.value}
        >
          {option.label}
        </div>
      );
    }
  );
  renderedOptions.unshift(
    <div
      className="dropdown-option"
      onClick={() => handleOptionClick(defaultSelection)}
      key={defaultSelection.value}
    >
      {defaultSelection.label}
    </div>
  );

  return (
    <Wrapper ref={divEl} className="text-color">
      <div
        className="dropdown-bar box flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {!value ? "Filter by region" : value.label}

        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="dropdown-options box absolute top-full">
          {renderedOptions}
        </div>
      )}
    </Wrapper>
  );
};

export default Dropdown;
