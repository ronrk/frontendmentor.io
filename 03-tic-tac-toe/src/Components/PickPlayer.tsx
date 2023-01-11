import Wrapper from "../styles/PickPlayer.styled";

import { useGameContext } from "../context/game-context";

import { IconOOutlined, IconXOutlined } from "./UI/Icons";

const PickPlayer = () => {
  const {
    gameStatus: { player1 },
    choosePlayer1Type,
  } = useGameContext();
  return (
    <Wrapper className="bg-blue-light container text-to-center flex-col">
      <h2 className="text-gray-light fs-200 uppercase fw-l letter-space-2">
        pick player 1's mark
      </h2>
      <div className="radio-group bg-blue-dark flex">
        <input
          type="radio"
          name="player"
          id="x"
          value="x"
          checked={player1.type === "x"}
          onChange={(e) => choosePlayer1Type(e.target.value)}
        />
        <label htmlFor="x">
          <IconXOutlined className="icon" />
        </label>

        <input
          type="radio"
          name="player"
          id="o"
          value="o"
          checked={player1.type === "o"}
          onChange={(e) => choosePlayer1Type(e.target.value)}
        />
        <label htmlFor="o">
          <IconOOutlined className="icon" />
        </label>
      </div>
      <p className="fs-100 text-gray-dark uppercase letter-space-1">
        remember : x goes first
      </p>
    </Wrapper>
  );
};

export default PickPlayer;
