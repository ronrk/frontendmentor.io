import React, { useState } from "react";
export const useInput = (validateValue, initialValue) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};
