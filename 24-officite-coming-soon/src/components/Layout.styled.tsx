import styled from "styled-components";
import bgHeader from "../assets/home/bg-pattern-header.svg";
import bgFooter from "../assets/home/bg-pattern-footer.svg";

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  position: relative;
  background: linear-gradient(
    to bottom,
    #f2f2f2 0%,
    #f2f2f2 70%,
    hsl(var(--clr-dark)) 70%,
    hsl(var(--clr-dark)) 100%
  );

  & .bg-header {
    position: absolute;
    height: 500px;
    width: 100%;
    background-image: url(${bgHeader});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    top: -5%;
  }

  & main {
    position: relative;
    z-index: 1000;
  }
  & .bg-footer {
    z-index: 2;
    position: absolute;
    height: 800px;
    width: 100%;
    background-image: url(${bgFooter});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    bottom: 0%;
  }

  & .cards-container {
    padding: 3rem;
  }

  & .timer-wrapper {
    padding: 2rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .form-page {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  @media screen and (min-width: 750px) {
    .bg-header {
      background-position: right;
      right: 0;
    }
  }
  @media screen and (min-width: 1000px) {
    &.register {
      background: linear-gradient(
        to right,
        #f2f2f2 0%,
        #f2f2f2 70%,
        hsl(var(--clr-dark)) 70%,
        hsl(var(--clr-dark)) 100%
      );
    }
    & .form-page {
      text-align: left;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 2rem;
      align-items: center;
    }
    & .bg-footer {
      background-position: right;
    }
    & .cards-container {
      padding: 0;
      display: flex;
      justify-content: space-evenly;
    }
    & .timer-wrapper {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & .timer-link {
        align-self: flex-end;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default StyledLayout;
