import Squere from "./Squere";
import { useGameContext } from "../context/game-context";
import Wrapper from "../styles/Board.styled";

const Board = () => {
  const { board } = useGameContext();

  return (
    <Wrapper className="board flex-col">
      <div className="row flex">
        <Squere value={board[0]} squere={0} />
        <Squere value={board[1]} squere={1} />
        <Squere value={board[2]} squere={2} />
      </div>
      <div className="row flex">
        <Squere value={board[3]} squere={3} />
        <Squere value={board[4]} squere={4} />
        <Squere value={board[5]} squere={5} />
      </div>
      <div className="row flex">
        <Squere value={board[6]} squere={6} />
        <Squere value={board[7]} squere={7} />
        <Squere value={board[8]} squere={8} />
      </div>
    </Wrapper>
  );
};

export default Board;
