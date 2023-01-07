import { useEffect } from "react";

import GameStart from "./Pages/GameStart";
import GamePage from "./Pages/GamePage";

import { useGameContext } from "./context/game-context";
import EndGameModal from "./Components/EndGameModal";

const App = () => {
  const { gameStatus, board, changePlayer, checkWin, checkIfTied } =
    useGameContext();

  useEffect(() => {
    checkIfTied();
    checkWin();
    // changePlayer();
  }, [board]);

  useEffect(() => {
    if (gameStatus.state === "won" || gameStatus.state === "tie") {
      // restartGame();
    }
  }, [gameStatus]);

  if (gameStatus.state === "start") {
    return (
      <div className="app bg-blue-dark">
        <GameStart />
      </div>
    );
  }

  return (
    <div className="app bg-blue-dark">
      <GamePage />
      {gameStatus.state === "won" || gameStatus.state === "tie" ? (
        <EndGameModal />
      ) : null}
    </div>
  );
};

export default App;
