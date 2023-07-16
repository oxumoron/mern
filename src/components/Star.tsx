import React from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected: boolean;
  onSelect: () => void;
}

export const Star: React.FC<StarProps> = ({ selected, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
