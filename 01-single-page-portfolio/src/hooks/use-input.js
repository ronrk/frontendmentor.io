import { useState } from "react";

const useInput = (valueValidate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = valueValidate(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
