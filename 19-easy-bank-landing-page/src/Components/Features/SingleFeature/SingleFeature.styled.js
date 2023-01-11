import styled from "styled-components";

const SingeFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  & h3 {
    margin-top: 1rem;
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--dark-blue);
    letter-spacing: 1.1px;
  }

  & p {
    color: var(--grayish-blue);
    font-size: 1.6rem;
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    gap: 1rem;
  }
`;

export default SingeFeatureWrapper;
