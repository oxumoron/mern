import React from "react";
import { IColor } from "../models";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

interface ColorProps {
  color: IColor;
  remove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}

const Color: React.FC<ColorProps> = ({ color, remove, onRate }) => {
  return (
    <section>
      <h1>{color.title}</h1>
      <button onClick={() => remove(color.id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color.color }} />
      <StarRating
        initialRating={color.rating}
        onRatingChange={(rating) => onRate(color.id, rating)}
      />
    </section>
  );
};

export default Color;
