import { IGameContext } from "../types/types";
import { IconO, IconX } from "../Components/UI/Icons";

export const initialState: IGameContext = {
  curPlayer: "player2",
  gameStatus: {
    state: "start",
    winner: "none",
    player1: { type: "o", icon: "" },
    player2: { type: "x", icon: "" },
    opponent: true,
  },
  gameStats: {
    p1: 0,
    ties: 0,
    p2: 0,
  },
  board: [],
  choosePlayer1Type: (player) => {},
  changePlayer: () => {},
  startGame: () => {},
  chooseSquere: () => {},
  checkWin: () => {},
  checkIfTied: () => {},
  restartGame: () => {},
  quitGame: () => {},
};

let foundEmptyCell: boolean = false;

const computerMove: (arr: string[], val: string) => void = (arr, val) => {
  if (!foundEmptyCell) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    if (arr[randomIdx] === "") {
      arr[randomIdx] = val;
      foundEmptyCell = true;
    } else {
      computerMove(arr, val);
    }
  }
  return;
};

export const computerDelayedMove: (arr: string[], val: string) => void = (
  arr,
  val
) => {
  setTimeout(() => computerDelayedMove(arr, val), 3000);
};
