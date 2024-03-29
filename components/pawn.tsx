import styles from "../app/main.module.css";

interface PawnProps {
  position: number;
  color: "red" | "blue";
}

export default function Pawn(props: PawnProps) {
  const { color, position } = props;
  const str = `bg-` + color + `-500 ${styles["pawn"]}`;
  console.log(str);
  return <div className={str}></div>;
}
