import React from "react";
import styles from "../app/main.module.css";
import Pawn from "../components/pawn";
interface BoardSquareProps {
  value: string;
}

const BoardSquare: React.FC<BoardSquareProps> = ({ value }) => {
  return (
    <div
      className={`flex justify-center items-center ${styles["square"]} font-extrabold`}
    >
      <div className="flex flex-col items-center">
        <Pawn color={"red"} position={6} />
        <Pawn color={"blue"} position={1} />
      </div>
      {value}
    </div>
  );
};

export default BoardSquare;
