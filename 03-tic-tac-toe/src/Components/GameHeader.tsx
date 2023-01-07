import { useGameContext } from "../context/game-context";
import Button from "./UI/Button";

import Wrapper from "../styles/GameHeader.styles";

import { Logo, IconO, IconX, IconRestart } from "./UI/Icons";

const GameHeader = () => {
  const {
    curPlayer,
    gameStatus: { player1, player2 },
  } = useGameContext();

  return (
    <Wrapper className="flex">
      <Logo />
      <div className="player uppercase text-gray-dark bg-blue-light flex fs-200 letter-space-2">
        {curPlayer === "player1" ? player2.icon : player1.icon} turn
      </div>
      <Button gray>
        <IconRestart />
      </Button>
    </Wrapper>
  );
};

export default GameHeader;
