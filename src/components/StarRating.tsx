import React, { useState } from "react";
import { Star } from "./Star";

interface StarRatingProps {
  totalStars?: number;
  startRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  startRating,
  totalStars = 5,
}) => {
  const [selectedStars, setSelectedStars] = useState<number>(startRating);

  const handleStarSelect = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  // const stars = Array.from({ length: totalStars }, (_, index) => (
  //   <Star
  //     key={index}
  //     selected={index < selectedStars}
  //     onSelect={() => handleStarSelect(index)}
  //   />
  // ));

  const createArray = (length: number) => [...Array(length)];

  const stars = () =>
    createArray(totalStars).map((_, index) => (
      <Star
        key={index}
        selected={index < selectedStars}
        onSelect={() => handleStarSelect(index)}
      />
    ));

  return (
    <>
      {/* {stars} */}
      {stars()}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;
