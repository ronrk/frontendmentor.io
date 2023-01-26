import logo from "../../assets/shared/logo.svg";
import Wrapper from "./Header.styled";

const HeaderHero = () => {
  return (
    <Wrapper>
      <img src={logo} alt="officite logo" />
    </Wrapper>
  );
};

export default HeaderHero;
