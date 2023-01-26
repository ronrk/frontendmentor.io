import Wrapper from "./Form.styled";
import useInput from "../../hooks/useInput";
import Dropdown from "../ui/Dropdown";
import { useState } from "react";

export interface IDropdownValue {
  title: string;
  price: string;
  label: string;
  id: string;
}

const options: IDropdownValue[] = [
  { title: "Basic Pack", price: "Free", label: "basic", id: "1" },
  { title: "Pro Pack", price: "$9.99", label: "pro", id: "2" },
  { title: "Ultimate Pack", price: "$19.99", label: "ultimate", id: "3" },
];

const Form = () => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownValue | null>(
    null
  );

  const handleDropdownChange = (value: IDropdownValue) => {
    setDropdownValue(value);
  };

  const {
    value: enteredName,
    onBlur: onNameBlur,
    onFocus: onNameFocus,
    handleChange: onNameChange,
    isError: errorName,
  } = useInput((val) => val.length !== 0);

  const {
    value: enteredEmail,
    onBlur: onEmailBlur,
    onFocus: onEmailFocus,
    handleChange: onEmailChange,
    isError: errorEmail,
  } = useInput((val) => val.length !== 0);
  const {
    value: enteredPhone,
    onBlur: onPhoneBlur,
    onFocus: onPhoneFocus,
    handleChange: onPhoneChange,
    isError: errorPhone,
  } = useInput((val) => val.length !== 0);
  const {
    value: enteredCompany,
    onBlur: onCompanyBlur,
    onFocus: onCompanyFocus,
    handleChange: onCompanyChange,
    isError: errorCompany,
  } = useInput((val) => val.length !== 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorName || errorEmail || errorPhone || errorCompany) {
      return;
    }
  };

  return (
    <Wrapper className="bg-white" onSubmit={handleSubmit}>
      <div className="form__control">
        <label htmlFor="name">Name</label>
        <input
          className={errorName ? "error" : ""}
          type="text"
          name="name"
          id="name"
          value={enteredName}
          onChange={(e) => onNameChange(e.target.value)}
          onBlur={onNameBlur}
          onFocus={onNameFocus}
        />
        <p className={errorName ? "error-msg show" : "error-msg"}>
          Name cannot be empty.
        </p>
      </div>
      <div className="form__control">
        <label htmlFor="email">Email</label>
        <input
          className={errorName ? "error" : ""}
          type="text"
          name="email"
          id="email"
          value={enteredEmail}
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={onEmailBlur}
          onFocus={onEmailFocus}
        />
        <p className={errorName ? "error-msg show" : "error-msg"}>
          Email cannot be empty.
        </p>
      </div>
      <div className="form__control">
        <Dropdown
          onChange={handleDropdownChange}
          value={dropdownValue}
          options={options}
        />
      </div>
      <div className="form__control">
        <label htmlFor="phone">Phone Number</label>
        <input
          className={errorName ? "error" : ""}
          type="number"
          name="phone"
          id="phone"
          value={enteredPhone}
          onChange={(e) => onPhoneChange(e.target.value)}
          onBlur={onPhoneBlur}
          onFocus={onPhoneFocus}
        />
        <p className={errorName ? "error-msg show" : "error-msg"}>
          Phone cannot be empty.
        </p>
      </div>
      <div className="form__control">
        <label htmlFor="company">Company</label>
        <input
          className={errorName ? "error" : ""}
          type="text"
          name="company"
          id="company"
          value={enteredCompany}
          onChange={(e) => onCompanyChange(e.target.value)}
          onBlur={onCompanyBlur}
          onFocus={onCompanyFocus}
        />
        <p className={errorName ? "error-msg show" : "error-msg"}>
          Company cannot be empty.
        </p>
      </div>

      <button className="fs-700 fw-b" type="submit">
        Get on the list
      </button>
    </Wrapper>
  );
};

export default Form;
