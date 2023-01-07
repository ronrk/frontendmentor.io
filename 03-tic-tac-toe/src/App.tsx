import { useState, useEffect } from "react";
import Squere from "./Components/Squere";
import GameStart from "./Pages/GameStart";
import { Patterns } from "./patterns";

const App = () => {
  const [board, setBoard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [player, setPlayer] = useState<string>("O");
  const [result, setResult] = useState({ winner: "none", state: "start" });

  if (result.state === "start") {
    return (
      <div className="app bg-blue-dark">
        <GameStart />
      </div>
    );
  }

  useEffect(() => {
    checkWin();
    checkIfTied();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state === "won" || result.state === "Tie") {
      console.log({ result });
      restartGame();
    }
  }, [result]);

  const chooseSquere: (squere: number) => void = (squere) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === squere && val === "") {
          return player;
        }
        return val;
      })
    );
    checkWin();
  };

  const checkWin = () => {
    Patterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      pattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTied = () => {
    let filled = true;
    board.forEach((squere) => {
      if (squere === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  return (
    <div className="app">
      <div className="board">
        <div className="row">
          <Squere value={board[0]} chooseSquere={() => chooseSquere(0)} />
          <Squere value={board[1]} chooseSquere={() => chooseSquere(1)} />
          <Squere value={board[2]} chooseSquere={() => chooseSquere(2)} />
        </div>
        <div className="row">
          <Squere value={board[3]} chooseSquere={() => chooseSquere(3)} />
          <Squere value={board[4]} chooseSquere={() => chooseSquere(4)} />
          <Squere value={board[5]} chooseSquere={() => chooseSquere(5)} />
        </div>
        <div className="row">
          <Squere value={board[6]} chooseSquere={() => chooseSquere(6)} />
          <Squere value={board[7]} chooseSquere={() => chooseSquere(7)} />
          <Squere value={board[8]} chooseSquere={() => chooseSquere(8)} />
        </div>
      </div>
    </div>
  );
};

export default App;
