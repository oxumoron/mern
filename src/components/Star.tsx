import React from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  selected?: boolean;
  onClick?: () => void;
}

export const Star: React.FC<StarProps> = ({ selected, onClick }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onClick} />
);
