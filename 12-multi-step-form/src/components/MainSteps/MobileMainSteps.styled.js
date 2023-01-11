import styled from "styled-components";
import bgMobile from "../../assets/images/bg-sidebar-mobile.svg";

const MobileMainStepsWrapper = styled.div`
  display: none;
  background-image: url(${bgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 3rem;
  padding-bottom: 10rem;

  & .steps__list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  & .steps__list-item {
    &.active {
      & .item__number {
        background-color: var(--light-blue);
        border-color: var(--light-blue);
        color: var(--marine-blue);
      }
    }
  }
  & .item__number {
    font-size: 1.6rem;
    border: 1px solid var(--magnolia);
    border-radius: 50%;
    padding: 0.3rem 0.8rem;
    color: var(--magnolia);
  }
  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export default MobileMainStepsWrapper;
