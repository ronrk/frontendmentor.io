import styled from "styled-components";

const StyledCountryGridItem = styled.article`
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  min-height: 420px;

  & .image-wrapper {
    position: relative;
    width: 100%;
    min-height: 160px;
    margin-bottom: 1em;

    & img {
      display: block;
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  & .content {
    --gap: 0.5em;
    padding: 2em;

    & h2 {
      margin-bottom: 1rem;
    }
  }
`;

export default StyledCountryGridItem;
