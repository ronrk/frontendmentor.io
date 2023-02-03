import React from "react";
import { IconRight } from "./icons";
import styled from "styled-components";
import Link from "next/link";

const StyledLinkIcon = styled(Link)`
  align-items: center;
  letter-spacing: 1.3px;

  &:hover {
    color: hsl(var(--clr-primary));
  }
`;

const LinkIcon = () => {
  return (
    <StyledLinkIcon href="/" className="text-black-light text-overline flex">
      Shop <IconRight />
    </StyledLinkIcon>
  );
};

export default LinkIcon;
