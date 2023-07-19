import React, { FormEvent, useRef } from "react";

interface AddColorFormProps {
  onNewColor: (title: string, color: string) => void;
}

// Uncontol component
const AddColorForm: React.FC<AddColorFormProps> = ({ onNewColor }) => {
  const txtTitle = useRef<HTMLInputElement>(null);
  const hexColor = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const title = txtTitle.current!.value;
    const color = hexColor.current!.value;

    onNewColor(title, color);

    txtTitle.current!.value = "";
    hexColor.current!.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
