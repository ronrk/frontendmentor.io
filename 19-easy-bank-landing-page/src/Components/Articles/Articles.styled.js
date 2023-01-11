import styled from "styled-components";

const ArticlesWrapper = styled.section`
  grid-row: 4/5;
  grid-column: center-start/center-end;
  margin-top: 20rem;
  margin-bottom: 5rem;

  & h2 {
    text-align: center;
  }

  & .articles-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;

    @media screen and (max-width: 900px) {
      justify-content: center;
      padding: 3rem;
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 14rem;
  }
`;

export default ArticlesWrapper;
