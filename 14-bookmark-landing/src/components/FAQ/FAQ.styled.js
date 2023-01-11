import styled from "styled-components";

const FAQWrapper = styled.section`
  margin-bottom: 6rem;
  & h2 {
    font-weight: 500;
  }
  & p {
    line-height: 1.4;
    margin-block: 0.3em 2em;
  }

  & .faq-accordion {
    align-items: center;
    margin-block: 3rem 2rem;
  }

  & .faq-box {
    align-items: center;
    /* margin-block: 2rem; */
    width: 400px;
    text-align: left;

    & .question {
      justify-content: space-between;
      border-bottom: 2px solid hsl(var(--color-text-light), 0.3);
      /* font-size: 1.4rem; */

      & h5 {
        padding-block: 1em;
      }
      & .faq-btn {
        transition: all 0.2s;
        &.expanded {
          transform: rotate(180deg);

          & > * {
            stroke: hsl(var(--color-secondary));
          }
        }
      }
    }

    & .answer {
      margin-top: 1rem;
      width: 98%;
      /* font-size: 1.2rem; */
      line-height: 1.5;
    }
  }
`;

export default FAQWrapper;
