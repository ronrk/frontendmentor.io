import PickPlayer from "../Components/PickPlayer";

import { useGameContext } from "../context/game-context";

import { Logo } from "../Components/UI/Icons";
import Button from "../Components/UI/Button";
import Wrapper from "../styles/GameStartPage.styled";

const GameStart = () => {
  const { startGame } = useGameContext();
  return (
    <Wrapper className="flex-col container">
      <Logo className="logo" />

      <PickPlayer />
      <div className="btns-container flex-col ">
        <Button secondary fullWidth className="letter-space-5 fs-300 uppercase">
          new game (vs cpu)
        </Button>
        <Button
          primary
          fullWidth
          className="letter-space-5 fs-300 uppercase"
          onClick={startGame}
        >
          new game (vs player)
        </Button>
      </div>
    </Wrapper>
  );
};

export default GameStart;
