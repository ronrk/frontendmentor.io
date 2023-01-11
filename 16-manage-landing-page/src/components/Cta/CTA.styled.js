import styled from "styled-components";
import bgMobile from "../../images/bg-simplify-section-mobile.svg";

const CTAWrapper = styled.section`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: 30% 100%;
  padding: 3em;

  & h2 {
    margin-bottom: 1.5em;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 1em;
    & h2 {
      text-align: left;
      margin: 0;
    }

    & .btn {
      flex: 1;
      max-width: 200px;
      /* padding: 0; */
      /* padding-inline: 0.1em; */
      white-space: nowrap;
    }
  }
`;

export default CTAWrapper;
