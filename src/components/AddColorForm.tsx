import React, { FormEvent } from "react";
import { useInput } from "../hooks/useInput";

interface AddColorFormProps {
  onNewColor: (title: string, color: string) => void;
}

// Controlled component
const AddColorForm: React.FC<AddColorFormProps> = ({ onNewColor }) => {
  const titleProps = useInput({ initialValue: "" });
  const colorProps = useInput({ initialValue: "#000000" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    titleProps.reset();
    colorProps.reset();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
