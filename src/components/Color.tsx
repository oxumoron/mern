import React from "react";
import { IColor } from "../models";
import StarRating from "./StarRating";

interface ColorProps {
  color: IColor;
}

const Color: React.FC<ColorProps> = ({ color }) => {
  return (
    <section>
      <h1>{color.title}</h1>
      <div style={{ height: 50, backgroundColor: color.color }} />
      <StarRating startRating={color.rating} />
    </section>
  );
};

export default Color;
