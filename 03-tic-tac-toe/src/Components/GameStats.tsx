import { useGameContext } from "../context/game-context";
import Wrapper from "../styles/GameStats.styled";

const GameStats = () => {
  const {
    gameStatus: { player1, player2, opponent },
    gameStats,
  } = useGameContext();
  return (
    <Wrapper className="flex">
      <div className="you bg-primary-light flex-col uppercase text-to-center">
        <span className="fs-100">
          {player1.type} ({opponent ? "P1" : "you"})
        </span>
        <span className="fs-400 fw-b">{gameStats.p1}</span>
      </div>
      <div className="ties bg-gray-light flex-col uppercase text-to-center">
        <span className="fs-100">ties</span>
        <span className="fs-400 fw-b">{gameStats.ties}</span>
      </div>
      <div className="opponent bg-secondary-light flex-col uppercase text-to-center">
        <span className="fs-100">
          {player2.type} ({opponent ? "P2" : "CPu"})
        </span>
        <span className="fw-b fs-400">{gameStats.p2}</span>
      </div>
    </Wrapper>
  );
};

export default GameStats;
