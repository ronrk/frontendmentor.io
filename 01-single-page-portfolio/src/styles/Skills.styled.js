import styled from "styled-components";
import bg from "../assets/images/pattern-rings.svg";

const SkillsWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;
    top: 95%;
    right: -20rem;
    max-width: 550px;
  }
  @media screen and (min-width: 700px) {
  }
`;

export default SkillsWrapper;
