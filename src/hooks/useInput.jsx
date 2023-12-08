import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue("");
  };

  return { value, onInputChange, reset };
};

export default useInput;
