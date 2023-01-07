import Wrapper from "./styles/Generate.styled";
import { useGeneratorContext } from "../context/generator-context";

const Generate = () => {
  const generator = useGeneratorContext()?.generatePassword;
  return (
    <Wrapper className="bg-green text-gray-dark-2" onClick={generator}>
      Generate
    </Wrapper>
  );
};

export default Generate;
