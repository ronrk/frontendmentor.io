import styled from "styled-components";

const PlanetContentWrapper = styled.div`
  grid-area: content;
  --gap: 1em;

  & p {
    color: hsla(var(--clr-white), 0.6);
  }
  & span {
    color: hsla(var(--clr-white), 0.3);
  }

  & .src-link {
    color: hsla(var(--clr-white), 0.7);

    margin-left: 0.5em;
    display: inline-flex;
    align-items: center;
    align-items: center;
    gap: 0.3em;

    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 624px) {
    text-align: left;
    --gap: 2rem;
    & p {
      width: 80%;
    }
    & span {
      margin-top: 1em;
    }
  }
  @media screen and (min-width: 1050px) {
    width: 80%;
    justify-self: end;
  }
`;

export default PlanetContentWrapper;
