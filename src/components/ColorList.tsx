import React, { useContext } from "react";
import Color from "./Color";
import { IColor } from "../models";
import { ColorContext } from "../context/ColorProvider";

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
  const colorContext = useContext(ColorContext);

  if (!colorContext) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div className="color-list">
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
