import styled from "styled-components";

const FeaturesWrapper = styled.section`
  margin-top: 5rem;
  grid-row: 3/4;
  grid-column: center-start/center-end;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  & .features__text {
    font-size: 1.8rem;
    color: var(--grayish-blue);
    width: 70%;
  }

  & .features-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(25%, 1fr));
    column-gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    margin-top: 14rem;

    & .features-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 8rem;
      gap: 9rem;
    }
  }
`;

export default FeaturesWrapper;
