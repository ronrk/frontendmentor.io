import styled from "styled-components";

const ContentWrapper = styled.div`
  text-align: center;

  & p {
    margin-inline: auto;
    max-width: 45ch;
    line-height: 1.6;
    margin-top: 1em;
  }

  @media (min-width: 850px) {
    text-align: left;
  }
`;

export default ContentWrapper;
