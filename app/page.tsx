import Board from "../components/board";
import Pawn from "../components/pawn";

export default function Home() {
  return (
    <main>
      <Board size={10} />
      <Pawn color={"black"} position={[2, 3]} />
    </main>
  );
}
