import { log } from "console";
import React from "react";
import { Star } from "./Star";

interface StarRatingProps {
  totalStars?: number;
  initialRating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating,
  totalStars = 5,
  onRatingChange,
}) => {
  const createArray = (length: number) => [...Array(length)];

  const stars = createArray(totalStars).map((_, index) => (
    <Star
      key={index}
      selected={index < initialRating}
      onClick={() => onRatingChange(index + 1)}
    />
  ));

  return (
    <>
      {stars}
      <p>
        {initialRating} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;

// 17 string

// const [selectedStars, setSelectedStars] = useState<number>(startRating);

// const handleStarSelect = (starIndex: number) => {
//   setSelectedStars(starIndex + 1);
// };

// const stars = Array.from({ length: totalStars }, (_, index) => (
//   <Star
//     key={index}
//     selected={index < selectedStars}
//     onSelect={() => handleStarSelect(index)}
//   />
// ));
