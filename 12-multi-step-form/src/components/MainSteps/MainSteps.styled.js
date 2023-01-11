import styled from "styled-components";
import bgDesktop from "../../assets/images/bg-sidebar-desktop.svg";

const MainStepsWrapper = styled.div`
  background-image: url(${bgDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: flex-start;

  width: 40%;
  padding: 3rem 2rem;
  padding-right: 4rem;
  border-radius: 8px;

  @media screen and (max-width: 850px) {
    display: none;
  }

  & .steps__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .steps__list-item {
      display: flex;
      gap: 1rem;
      align-items: center;

      & .item__number {
        font-size: 1.6rem;
        border: 1px solid var(--magnolia);
        border-radius: 50%;
        padding: 0.3rem 0.8rem;
        color: var(--magnolia);
      }
      & .item__titles {
        h5 {
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--light-gray);
        }
        h4 {
          font-size: 1.4rem;
          color: var(--white);
        }
      }
      &.active {
        & .item__number {
          background-color: var(--light-blue);
          border-color: var(--light-blue);
          color: var(--marine-blue);
        }
      }
    }
  }
`;

export default MainStepsWrapper;
