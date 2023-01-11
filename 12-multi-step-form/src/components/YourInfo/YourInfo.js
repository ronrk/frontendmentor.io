import React from "react";

import Wrapper from "./YourInfo.styled";
import { useInput } from "../../hooks/useInput";
import { useFormStepContext } from "../../context/stepForm-context";

const YourInfo = () => {
  const { progressNextStep, values } = useFormStepContext();
  const {
    value: enteredName,
    hasError: nameHasError,
    inputBlurHandler: nameBlur,
    valueChangeHandler: nameChange,
    isValid: nameIsValid,
    reset: nameReset,
  } = useInput((val) => val.trim() !== "", values.name);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    inputBlurHandler: emailBlur,
    valueChangeHandler: emailChange,
    isValid: emailIsValid,
    reset: emailReset,
  } = useInput((val) => val.trim() !== "", values.email);

  const {
    value: enteredPhone,
    hasError: phoneHasError,
    inputBlurHandler: phoneBlur,
    valueChangeHandler: phoneChange,
    isValid: phoneIsValid,
    reset: phoneReset,
  } = useInput((val) => val.trim() !== "", values.phone);

  const handleSubmit = () => {
    if (!nameIsValid || !emailIsValid || !phoneIsValid) {
      return;
    }
    progressNextStep({
      phone: enteredPhone,
      name: enteredName,
      email: enteredEmail,
    });
  };
  return (
    <Wrapper className="form__flex">
      <div className="form__header">
        <h2 className="form__title">Personal Info</h2>
        <span>Please provide your name, email address, and phone number.</span>
      </div>
      <div className="form-content">
        <div className="form-control personal-info personal-info__name">
          <label htmlFor="name">Name</label>
          <input
            className={nameHasError ? "error" : null}
            onBlur={nameBlur}
            onChange={nameChange}
            value={enteredName}
            required
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
          />
          <span className="error-msg">This field is required</span>
        </div>

        <div className="form-control personal-info personal-info__email">
          <label htmlFor="email">Email Address</label>
          <input
            className={emailHasError ? "error" : null}
            onBlur={emailBlur}
            onChange={emailChange}
            value={enteredEmail}
            required
            type="email"
            name="email"
            id="email"
            placeholder="e.g. Stephen@king.com"
          />
          <span className="error-msg">This field is required</span>
        </div>
        <div className="form-control personal-info personal-info__phone">
          <label htmlFor="phone">Phone</label>
          <input
            className={phoneHasError ? "error" : null}
            onBlur={phoneBlur}
            onChange={phoneChange}
            value={enteredPhone}
            required
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g. + 123 1234 123"
          />
          <span className="error-msg">This field is required</span>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-next" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </Wrapper>
  );
};

export default YourInfo;
