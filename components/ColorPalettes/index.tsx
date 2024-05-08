"use client";
import { useState } from "react";
import ColorItem from "./ColorItem";

export default function ColorPalettes() {
  const [currentColor, setCurrentColor] = useState("gray");

  const onColorChange = (color: string) => {
    setCurrentColor(color);
  };
  return (
    <div className="flex">
      <ColorItem
        colorCode="hsl(240 5.2% 33.9%)"
        colorName="gray"
        isActive={currentColor === "gray"}
        onChange={onColorChange}
      />
      <ColorItem
        colorCode="hsl(346.8 77.2% 49.8%)"
        colorName="red"
        isActive={currentColor === "red"}
        onChange={onColorChange}
      />
      <ColorItem
        colorCode="hsl(217.2 91.2% 59.8%)"
        colorName="blue"
        isActive={currentColor === "blue"}
        onChange={onColorChange}
      />
      <ColorItem
        colorCode="hsl(142.1 70.6% 45.3%)"
        colorName="green"
        isActive={currentColor === "green"}
        onChange={onColorChange}
      />
      <ColorItem
        colorCode="hsl(20.5 90.2% 48.2%)"
        colorName="orange"
        isActive={currentColor === "orange"}
        onChange={onColorChange}
      />
    </div>
  );
}
