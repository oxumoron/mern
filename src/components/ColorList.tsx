import React from "react";
import Color from "./Color";
import { IColor } from "../models";

interface ColorListProps {
  colors: IColor[];
  removeColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
}

const ColorList: React.FC<ColorListProps> = ({
  colors,
  removeColor,
  onRateColor,
}) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          remove={removeColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
