import styled from "styled-components";

const TestimonialArticleWrapper = styled.article`
  display: grid;
  place-items: center;
  row-gap: 1.3em;
  position: relative;
  padding-block: 3.5em;
  margin-top: 4.5em;
  padding-bottom: 2em;
  margin-bottom: 0.5em;

  & .testimonial__img {
    max-width: 70px;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }

  & p {
    line-height: 1.5em;
    max-width: 50ch;
  }
`;

export default TestimonialArticleWrapper;
