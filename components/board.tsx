import React from "react";
import BoardSquare from "./BoardSquare";

interface BoardProps {
  size: number;
}

export default function Board({ size }: BoardProps) {
  const squares = [];
  let even = false;
  for (let i = size * size; i >= 1; i--) {
    squares.push(<BoardSquare key={i} value={i.toString()} />);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-10 gap-1 bg-orange-400 p-1 w-2/3">
        {squares}
      </div>
    </div>
  );
}
