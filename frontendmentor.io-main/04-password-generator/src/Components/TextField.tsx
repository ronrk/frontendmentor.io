import { useGeneratorContext } from "../context/generator-context";
import copyIcon from "../assets/images/icon-copy.svg";
import Wrapper from "./styles/TextField.styled.js";

const TextField = () => {
  const password = useGeneratorContext()?.password;

  return (
    <Wrapper className="form-control bg-gray-dark container flex">
      <input
        type="text"
        value={password}
        onChange={(e) => {}}
        className="text-white fs-400"
      />
      <button
        className="btn--copy"
        onClick={() => {
          navigator.clipboard.writeText(password || "");
        }}
      >
        <img src={copyIcon} alt="" />
      </button>
    </Wrapper>
  );
};

export default TextField;
