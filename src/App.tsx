import React, { useContext } from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { ColorContext } from "./context/ColorProvider";

const App: React.FC = () => {
  const context = useContext(ColorContext);

  if (!context) return null;

  const { colors, addColor, rateColor, removeColor } = context;

  return (
    <>
      <AddColorForm onNewColor={addColor} />
      <ColorList
        colors={colors}
        removeColor={removeColor}
        onRateColor={rateColor}
      />
    </>
  );
};

export default App;
