import styled from "styled-components";

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;

  h2 {
    font-size: 3rem;
    color: var(--marine-blue);
  }
  p {
    padding: 2rem;
    font-size: 1.8rem;
    color: var(--cool-gray);
    letter-spacing: 1px;
  }
`;

export default ThankYouWrapper;
