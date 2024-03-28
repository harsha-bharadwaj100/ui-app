import React from "react";

interface BoardSquareProps {
  value: string;
}

const BoardSquare: React.FC<BoardSquareProps> = ({ value }) => {
  return (
    <div className="flex-auto border-2 bg-blue-300 aspect-w-1 aspect-h-1">
      {value}
    </div>
  );
};

export default BoardSquare;
