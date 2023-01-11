import styled from "styled-components";
import mobileBg from "../../images/bg-boost-mobile.svg";

const GetStartedWrapper = styled.section`
  text-align: center;
  padding-block: 5rem;
  align-items: center;
  justify-content: center;
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  background-color: var(--color-primary-dark);
  --gap: 2.5rem;
  margin-top: 15rem;
`;

export default GetStartedWrapper;
