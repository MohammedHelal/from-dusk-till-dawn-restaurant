import { useState } from "react";

function useInput(initialState, validationFn) {
  const [inputValue, setInputValue] = useState(initialState);
  const [inputError, setinputError] = useState(false);

  function handleChange(e) {
    setinputError(false);
    setInputValue(e.target.value);
  }

  function handleBlur(e) {
    if (!validationFn(inputValue)) setinputError(true);
  }

  return { value: inputValue, error: inputError, handleChange, handleBlur };
}

export default useInput;
