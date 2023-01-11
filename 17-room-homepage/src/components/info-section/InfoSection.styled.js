import styled from "styled-components";

const InfoSectionWrapper = styled.section`
  & img {
    margin-block: 3rem;
    width: 100%;
    max-height: 45vh;
    object-fit: cover;
  }

  & h3 {
    margin-bottom: 0.7em;
    letter-spacing: 0.2em;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    display: flex;

    & img {
      margin: 0;
      min-width: 20%;
    }

    & .content {
      padding: 4rem;
    }
  }
`;

export default InfoSectionWrapper;
