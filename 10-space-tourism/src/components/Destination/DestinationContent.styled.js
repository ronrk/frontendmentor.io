import styled from "styled-components";

const DestinationContentWrapper = styled.article`
  & .destination__meta {
    flex-direction: column;
    border-top: 1px solid hsl(var(--color-white), 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;

    & p {
      font-size: 1.75rem;
    }

    @media (min-width: 35em) {
      flex-direction: row;
      justify-content: space-evenly;
    }

    @media screen and (min-width: 45em) {
      --gap: min(8vw, 6rem);
      justify-content: start;
    }
  }
`;

export default DestinationContentWrapper;
