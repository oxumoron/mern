import React from "react";
import Color from "./Color";
import { IColor } from "../models";

interface ColorListProps {
  colors: IColor[];
}

const ColorList: React.FC<ColorListProps> = ({ colors }) => {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
};

export default ColorList;
