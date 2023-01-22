import styled from "styled-components";

const PricintStyled = styled.section`
  position: relative;
  margin-block: 6em;
  border-radius: 10px;

  max-width: 485px;
  min-width: 30vw;
  margin-inline: auto;
  padding: 1em;
  padding-top: 3em;
  display: flex;
  flex-direction: column;

  & .content {
    margin-bottom: 2em;
    & p {
      max-width: 45ch;
    }
  }

  & .pricing-icon {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    transform: translateY(-50%);
    left: 10%;
  }

  & .list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & h2 {
      display: flex;
      align-items: center;
      gap: 0.2em;
    }
    & ul {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-evenly;
      & li {
        display: flex;
        align-items: center;
        & .icon {
          margin-right: 1em;
        }
      }
    }
  }
`;

export default PricintStyled;
