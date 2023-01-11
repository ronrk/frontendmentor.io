import styled from "styled-components";

const AdvancedSectionWrapper = styled.section`
  text-align: center;
  margin-block: 8rem;
  p {
    max-width: 50ch;
    margin-inline: auto;
  }

  & .advanced__container {
    position: relative;
    margin-top: 4rem;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      background-color: var(--color-primary);
      width: 8px;
      height: 80%;
      z-index: -1;
    }
  }
  & .advanced__article {
    padding: 1em 2em;
    margin-block: 3rem;
    max-width: 500px;
    border-radius: 6px;

    & h3 {
      margin-top: 1rem;
    }

    & .advanced__icon {
      padding: 1em;
      border-radius: 50%;
      /* transform: translateY(-70%); */
      margin-top: -8rem;
      background-color: var(--color-violet-dark);

      width: 100px;
    }
  }

  @media screen and (min-width: 950px) {
    & .advanced__container {
      flex-direction: row;
      align-items: stretch;
      gap: 2rem;

      & > *:not(:first-child) {
        transform: translateY(5rem);
      }
      & > *:last-child {
        transform: translateY(10rem);
      }

      &::after {
        width: 90%;
        height: 10px;
        top: 70%;
      }
    }
  }
`;

export default AdvancedSectionWrapper;
