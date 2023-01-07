import PickPlayer from "../Components/PickPlayer";
import iconX from "../assets/icon-x.svg";
import iconO from "../assets/icon-o.svg";
import Button from "../Components/UI/Button";

const GameStart = () => {
  return (
    <div className="game-start-page">
      <div className="icons-container">
        <img src={iconX} alt="icon x" className="icon-player" />
        <img src={iconO} alt="icon O" className="icon-player" />
      </div>

      <div className="bg-blue-light">
        <PickPlayer />
      </div>
      <Button secondary fullWidth uppercase>
        new game (vs cpu)
      </Button>
      <Button primary fullWidth uppercase>
        new game (vs player)
      </Button>
    </div>
  );
};

export default GameStart;
