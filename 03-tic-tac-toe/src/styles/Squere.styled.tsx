import styled from "styled-components";

const Squere = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 30px;
  color: black;
  box-shadow: var(--shadow) #10212a;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    box-shadow: inset 0px -4px 0px #10212a;
  }
  &:active {
    box-shadow: inset 0px 0px 0px #10212a;
  }
`;

export default Squere;
