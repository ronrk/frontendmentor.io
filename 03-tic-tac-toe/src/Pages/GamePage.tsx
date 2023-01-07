import GameHeader from "../Components/GameHeader";
import Board from "../Components/Board";
import GameStats from "../Components/GameStats";

const GamePage = () => {
  return (
    <div>
      <GameHeader />
      <Board />
      <GameStats />
    </div>
  );
};

export default GamePage;
