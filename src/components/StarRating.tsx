import React from "react";
import { Star } from "./Star";

interface StarRatingProps {
  totalStars?: number;
  selectedStars: number;
  onRate: (index: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  selectedStars,
  onRate,
}) => {
  const createArray = (length: number) => [...Array(length)];

  const stars = createArray(totalStars).map((_, index) => (
    <Star
      key={index}
      selected={index < selectedStars}
      onSelect={() => onRate && onRate(index + 1)}
    />
  ));

  return (
    <>
      {stars}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;
