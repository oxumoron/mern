import React, { useState } from "react";
import colorData from "./data/colorData";
import ColorList from "./components/ColorList";
import { IColor } from "./models";

export default function App() {
  const [colors, setColors] = useState<IColor[]>(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      removeColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}
