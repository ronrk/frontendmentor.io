import styled from "styled-components";

const SingleArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  & img {
    display: block;
    width: 100%;
    align-self: stretch;
    height: 50%;
  }

  & span {
    padding: 0 1rem;
    font-size: 1.2rem;
    color: var(--grayish-blue);
  }

  & h4 {
    padding: 0 1rem;
    margin-top: 2rem;
    font-weight: 500;
    font-size: 1.9rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--lime-green);
    }
  }

  & p {
    padding: 0 1rem;
    padding-bottom: 2rem;
    font-size: 1.4rem;
    color: var(--grayish-blue);
    letter-spacing: 0.4px;
  }
`;

export default SingleArticleWrapper;
