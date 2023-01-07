import React, { FC, useContext, useState } from "react";

import { IGameContext, IGameStatus, IGameStats, TPlayer } from "../types/types";
import { initialState } from "./utils";
import { Patterns } from "../patterns";
import { IconO, IconX } from "../Components/UI/Icons";

import { computerDelayedMove } from "./utils";

const GameContext = React.createContext<IGameContext>(initialState);

const GameContextProvider: FC<any> = ({ children }) => {
  const [curPlayer, setCurPlayer] = useState<"player1" | "player2">("player2");
  const [gameStatus, setGameStatus] = useState<IGameStatus>({
    state: "start",
    winner: "none",
    opponent: true,
    player1: { type: "o", icon: <IconX className="icon" /> },
    player2: { type: "x", icon: <IconO className="icon" /> },
  });
  const [gameStats, setGameStats] = useState<IGameStats>({
    p1: 0,
    ties: 0,
    p2: 0,
  });
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

  const choosePlayer1Type: (player: TPlayer | string) => void = (player) => {
    console.log("fn Choost p1 type");
    if (player === "x") {
      console.log({ fn: "fn Choost p1 type", value: "X" });
      setGameStatus((prev) => ({
        ...prev,
        player1: {
          type: "x",
          icon: <IconX className="icon" viewBox="0 -40 100 150" />,
        },
        player2: {
          type: "o",
          icon: <IconO className="icon" viewBox="0 -40 100 150" />,
        },
      }));
      setCurPlayer("player1");
    } else {
      console.log({ fn: "fn Choost p1 type", value: "O" });
      setGameStatus((prev) => ({
        ...prev,
        player1: {
          type: "o",
          icon: <IconO className="icon" viewBox="0 -40 100 150" />,
        },
        player2: {
          type: "x",
          icon: <IconX className="icon" viewBox="0 -40 100 150" />,
        },
      }));
      setCurPlayer("player2");
    }
  };

  const changePlayer = () => {
    console.log("fn ChangePlayer");
    setCurPlayer((prev) => {
      if (prev === "player1") {
        return "player2";
      } else {
        return "player1";
      }
    });
  };

  const startGame = () => {
    console.log("fn StartGame");
    if (gameStatus.player1.type === "o") {
      console.log({ fn: "fn StartGame", value: "O" });
      setCurPlayer("player2");
    }
    if (gameStatus.player1.type === "x") {
      console.log({ fn: "fn StartGame", value: "X" });
      setCurPlayer("player1");
    }
    setGameStatus((prev) => {
      return { ...prev, state: "playing", winner: "none" };
    });
  };

  const chooseSquere: (squere: number) => void = async (squere) => {
    console.log("fn ChooseSquere");
    setBoard(
      board.map((val, idx) => {
        if (idx === squere && val === "") {
          return gameStatus[curPlayer].type;
        }
        return val;
      })
    );
    await checkWin();
    if (gameStatus.state === "playing") {
      changePlayer();
    }
    // checkIfTied();
  };

  const checkWin = () => {
    console.log("fn CheckWIn");
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
        console.log({ fn: "fn CheckWin", value: "Found winner " + curPlayer });
        setGameStatus((prev) => {
          return {
            ...prev,
            winner: curPlayer,
            state: "won",
          };
        });
        if (curPlayer === "player1") {
          setGameStats((prev) => ({ ...prev, p1: prev.p1 + 1 }));
        }
        if (curPlayer === "player2") {
          setGameStats((prev) => ({ ...prev, p2: prev.p2 + 1 }));
        }
      }
    });
  };

  const checkIfTied = () => {
    console.log("fn Check Tied");
    let filled = true;
    board.forEach((squere) => {
      if (squere === "") {
        filled = false;
      }
    });

    if (filled) {
      console.log({ fn: "fn CheckTied", value: "Tied Game" });
      setGameStatus((prev) => ({ ...prev, winner: "none", state: "tie" }));
      setGameStats((prev) => ({ ...prev, ties: prev.ties + 1 }));
    }
  };

  const restartGame = () => {
    console.log("fn RestartGame");
    setBoard(["", "", "", "", "", "", "", "", ""]);
    startGame();
  };

  const quitGame = () => {
    setCurPlayer("player2");
    setGameStatus({
      state: "start",
      winner: "none",
      opponent: true,
      player1: { type: "o", icon: <IconX className="icon" /> },
      player2: { type: "x", icon: <IconO className="icon" /> },
    });
    setGameStats({
      p1: 0,
      ties: 0,
      p2: 0,
    });
    setBoard(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <GameContext.Provider
      value={{
        curPlayer,
        choosePlayer1Type,
        changePlayer,
        startGame,
        board,
        chooseSquere,
        checkWin,
        checkIfTied,
        gameStatus,
        restartGame,
        gameStats,
        quitGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);

export default GameContextProvider;
