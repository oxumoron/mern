import React, { createContext, useState } from "react";
import { v4 } from "uuid";
import colorData from "../data/colorData";
import { IColor } from "../models";

interface ColorContextType {
  colors: IColor[];
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
}

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colors, setColors] = useState<IColor[]>(colorData);

  const addColor = (title: string, color: string) => {
    const newColor: IColor = {
      id: v4(),
      title,
      color,
      rating: 0,
    };
    setColors([...colors, newColor]);
  };

  const rateColor = (id: string, rating: number) => {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(updatedColors);
  };

  const removeColor = (id: string) => {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};
