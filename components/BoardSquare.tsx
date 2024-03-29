import React from "react";

interface BoardSquareProps {
  value: string;
}

const BoardSquare: React.FC<BoardSquareProps> = ({ value }) => {
  return (
    <div className="flex border-2 bg-blue-300 h-full justify-center items-center">
      {value}
    </div>
  );
};

export default BoardSquare;
