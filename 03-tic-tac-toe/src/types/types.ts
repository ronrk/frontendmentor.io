import { IconO, IconX } from "../Components/UI/Icons";

export interface IPlayer {
  type: TPlayer;
  icon: JSX.Element | "";
}

export interface IGameStatus {
  state: "start" | "playing" | "tie" | "won";
  winner: "none" | string;
  opponent: boolean;
  player1: IPlayer;
  player2: IPlayer;
}

export interface IGameStats {
  p1: number;
  ties: number;
  p2: number;
}

export type TPlayer = "x" | "o";

export interface IGameContext {
  gameStatus: IGameStatus;
  gameStats: IGameStats | undefined;
  curPlayer: "player1" | "player2";
  choosePlayer1Type: (player: TPlayer | string) => void;
  changePlayer: () => void;
  startGame: () => void;
  board: string[];
  chooseSquere: (squere: number) => void;
  checkWin: () => void;
  checkIfTied: () => void;
  restartGame: () => void;
  quitGame: () => void;
}
