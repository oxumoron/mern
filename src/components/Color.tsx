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
  const handleRate = (rating: number) => {
    if (onRate) {
      onRate(color.id, rating);
    }
  };

  const handleRemove = () => {
    if (remove) {
      remove(color.id);
    }
  };

  return (
    <section>
      <h1>{color.title}</h1>
      <div style={{ height: 50, backgroundColor: color.color }} />
      <button onClick={handleRemove}>
        <FaTrash />
      </button>
      <StarRating selectedStars={color.rating} onRate={handleRate} />
    </section>
  );
};

export default Color;
