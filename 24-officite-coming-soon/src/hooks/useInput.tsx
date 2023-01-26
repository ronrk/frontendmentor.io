import { useState } from "react";

const useInput = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const isError = isTouched && error;

  const handleChange = (value: string) => {
    setValue(value);
  };
  const onFocus = () => {
    setError(false);
    setIsTouched(true);
  };
  const onBlur = () => {
    const isValueValid = validate(value);

    setError(!isValueValid);
  };

  return { value, handleChange, isError, onFocus, onBlur };
};

export default useInput;
