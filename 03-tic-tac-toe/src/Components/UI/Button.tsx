import styled from "styled-components";

interface IProps {
  primary?: boolean;
  secondary?: boolean;
  gray?: boolean;
  blue?: boolean;
  fullWidth?: boolean;
  uppercase?: boolean;
}

const Button = styled.button<IProps>`
  text-align: center;
  background: ${({ primary, secondary, blue, gray }) =>
    primary
      ? "var(--clr-primary-light)"
      : secondary
      ? "var(--clr-secondary-light)"
      : blue
      ? "var(--clr-blue-light)"
      : gray
      ? "var(--clr-gray-light)"
      : "transparent"};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
  border-radius: 5px;
  box-shadow: var(--shadow)
    ${({ primary, secondary, blue, gray }) =>
      primary
        ? "var(--clr-primary-dark)"
        : secondary
        ? "var(--clr-secondary-dark)"
        : blue
        ? "var(--clr-blue-dark)"
        : gray
        ? "var(--clr-gray-dark)"
        : "transparent"};
  padding: 1em 2em;
  transition: all 0.2s;
  &:hover {
    filter: brightness(120%);
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.99);
    filter: brightness(100%);
    opacity: 0.8;
  }
`;

export default Button;
