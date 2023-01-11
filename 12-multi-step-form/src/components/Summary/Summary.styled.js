import styled from "styled-components";

const SummaryWrapper = styled.div`
  & .summary-content {
    gap: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  & .summary__box {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .summary__box.plan,
  .summary__box.add-on {
    background-color: var(--magnolia);

    h5 {
      font-size: 1.8rem;
      color: var(--marine-blue);
      margin-bottom: 0.5rem;
    }

    & .change-plan {
      text-decoration: none;
      color: var(--cool-gray);
      text-decoration: underline;
      font-size: 1.4rem;
    }
  }

  & .summary__box.add-on {
    p {
      font-size: 1.4rem;
      text-transform: capitalize;
      color: var(--cool-gray);
    }
    span {
      font-size: 1.4rem;
      color: var(--marine-blue);
      font-weight: 500;
    }
  }

  & .summary__box.sum {
    p {
      font-size: 1.4rem;
      color: var(--cool-gray);
    }
    span {
      font-size: 1.7rem;
      font-weight: 500;
      color: var(--purplish-blue);
    }
  }

  hr {
    margin: 0 auto;
  }
`;

export default SummaryWrapper;
