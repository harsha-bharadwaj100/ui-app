import React from "react";
import BoardSquare from "./BoardSquare";

interface BoardProps {
  size: number;
}

export default function Board({ size }: BoardProps) {
  const squares = [];

  for (let i = size * size; i >= 1; i--) {
    squares.push(<BoardSquare key={i} value={i.toString()} />);
  }

  return (
    <div className="grid grid-cols-10 gap-1 bg-orange-600 p-1 w-1/3 h-96 font-extrabold">
      {squares}
    </div>
  );
}
