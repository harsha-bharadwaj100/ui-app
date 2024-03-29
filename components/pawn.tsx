import React from "react";

interface PawnProps {
  color: "white" | "black";
  position: [number, number];
}

const Pawn: React.FC<PawnProps> = ({ color, position }) => {
  const [x, y] = position;

  const className = `bg-${color}-500 rounded-full w-10 h-10 absolute`;

  return <div className={className} />;
};

export default Pawn;
