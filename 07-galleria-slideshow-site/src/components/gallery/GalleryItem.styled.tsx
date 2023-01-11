import styled from "styled-components";

const GalleryItemStyled = styled.article`
  display: grid;
  grid-template-columns: 100%;
  background-color: hsl(var(--clr-dark), 0.3);
  width: 100%;
  height: 100%;
  &.item--0 {
    grid-row: span 2;
  }
  &.item--1 {
    grid-row: span 3;
  }
  &.item--2 {
    grid-row: span 2;
  }
  &.item--3 {
    grid-row: span 3;
  }
  &.item--4 {
    grid-row: span 3;
  }
  &.item--5 {
    grid-row: span 2;
  }
  &.item--6 {
    grid-row: span 4;
  }
  &.item--7 {
    grid-row: span 2;
  }
  &.item--8 {
    grid-row: span 5;
  }
  &.item--9 {
    grid-row: span 2;
  }
  &.item--10 {
    grid-row: span 4;
  }
  &.item--11 {
    grid-row: span 3;
  }
  &.item--12 {
    grid-row: span 4;
  }
  &.item--13 {
    grid-row: span 5;
  }
  &.item--14 {
    grid-row: span 3;
  }

  &:not(:last-child) {
    /* margin-bottom: 3rem; */
  }

  & .image-wrapper {
    position: relative;
    height: 100%;

    grid-row: 1/2;
    grid-column: 1/2;
    z-index: -1;

    & img {
      object-fit: fill;
      mix-blend-mode: screen;
    }
  }
  & .content {
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: end;
    padding: 1em;
    /* mix-blend-mode: screen; */
  }
`;

export default GalleryItemStyled;
