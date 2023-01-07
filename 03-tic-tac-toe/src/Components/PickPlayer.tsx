import Wrapper from "../styles/PickPlayer.styled";

const PickPlayer = () => {
  return (
    <Wrapper className="text-to-center">
      <h2 className="text-gray-light fs-200 uppercase fw-l">
        pick player 1's mark
      </h2>
      <div className="radio-group">
        <input type="radio" name="player" id="x" />
        <label htmlFor="x">X</label>
        <input type="radio" name="player" id="o" />
        <label htmlFor="o">O</label>
      </div>
      <p className="fs-100 text-gray-dark uppercase">remember : x goes first</p>
    </Wrapper>
  );
};

export default PickPlayer;
