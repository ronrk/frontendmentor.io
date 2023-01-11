import { FC } from "react";
import { IconO, IconX } from "./UI/Icons";
import "../index.css";
import { useGameContext } from "../context/game-context";

import Wrapper from "../styles/Squere.styled";

interface IProps {
  value: string;
  squere: number;
}

const Squere: FC<IProps> = ({ value, squere }) => {
  const { chooseSquere } = useGameContext();
  let content: string | JSX.Element = "";
  if (value === "x") {
    content = <IconX />;
  }
  if (value === "o") {
    content = <IconO />;
  }
  return (
    <Wrapper
      onClick={() => chooseSquere(squere)}
      className="squere bg-blue-light"
    >
      {content}
    </Wrapper>
  );
};

export default Squere;
