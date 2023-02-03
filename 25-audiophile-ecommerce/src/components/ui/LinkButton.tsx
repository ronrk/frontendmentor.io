import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  path: string;
  color: "primary" | "transparent" | "black";
}
interface IStyled {
  color: "primary" | "transparent" | "black";
}

const StyledLinkButton = styled(Link)<IStyled>`
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: var(--fs-300);
  border-radius: 3px;

  &.primary {
    &:hover {
      filter: brightness(150%);
    }
  }
  &.black {
    &:hover {
      background-color: hsl(var(--clr-white));
      color: hsl(var(--clr-black));
    }
  }
  &.transparent {
    border: 1px solid hsl(var(--clr-black));
    background-color: transparent;
    &:hover {
      background-color: hsl(var(--clr-black));
      color: hsl(var(--clr-white));
    }
  }
`;

const LinkButton: FC<IProps> = ({ children, path, color }) => {
  const classNames = `${color} ${
    color === "primary"
      ? "text-white bg-primary"
      : color === "black"
      ? "bg-black text-white"
      : "text-black"
  }`;

  return (
    <StyledLinkButton href={path} color={color} className={classNames}>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
