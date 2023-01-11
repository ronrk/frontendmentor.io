import Wrapper from "../styles/EndGameModal.styled";
import Button from "./UI/Button";
import { useGameContext } from "../context/game-context";

const EndGameModal = () => {
  const { gameStatus, restartGame, quitGame } = useGameContext();
  let content: string | JSX.Element = "";
  if (gameStatus.state === "won") {
    if (gameStatus.opponent) {
      if (gameStatus.winner === "player1") {
        content = (
          <>
            <p className="text-gray-dark fs-200">player 1 wins!</p>
            <h2 className="fs-400 fw-l text-primary-dark letter-space-5 flex">
              <span className="winner fw-b fs-500 ">
                {gameStatus.player1.type}
              </span>
              takes the round
            </h2>
          </>
        );
      } else if (gameStatus.winner === "player2") {
        content = (
          <>
            <p className="text-gray-dark fs-200">player 2 wins!</p>
            <h2 className="fs-400 fw-l text-secondary-dark letter-space-5 flex">
              <span className="winner fw-b fs-500 ">
                {gameStatus.player2.type}
              </span>
              takes the round
            </h2>
          </>
        );
      }
    }
  }

  if (gameStatus.state === "tie") {
    content = (
      <>
        <h2 className="fs-400 fw-l text-gray-dark letter-space-5 flex">
          Round tied
        </h2>
      </>
    );
  }

  return (
    <Wrapper>
      <div className="modal bg-blue-light flex-col uppercase text-to-center">
        {content}
        <div className="btn-container flex">
          <Button gray className="uppercase" onClick={quitGame}>
            quit
          </Button>
          <Button secondary className="uppercase" onClick={restartGame}>
            next round
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default EndGameModal;
