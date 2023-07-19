import { useState, ChangeEvent } from "react";

interface useInputProps {
  initialValue: string;
}

export const useInput = ({ initialValue }: useInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};
