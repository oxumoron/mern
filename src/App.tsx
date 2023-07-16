import React, { useState } from "react";
import colorData from "./data/colorData";
import ColorList from "./components/ColorList";
import { IColor } from "./models";

export default function App() {
  const [colors] = useState<IColor[]>(colorData);
  return <ColorList colors={colors} />;
}
