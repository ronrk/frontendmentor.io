import Link from "next/link";
import React, { FC } from "react";
import { IconSrc } from "../ui/icons";
import Wrapper from "./PlanetContent.styled";

interface IProps {
  name: string;
  curContext: string;
  context: string;
  srcUrl: string;
}

const PlanetContent: FC<IProps> = ({ name, context, curContext, srcUrl }) => {
  const srcLinkPath = `${srcUrl}${curContext !== "overview" ? curContext : ""}`;

  return (
    <Wrapper className=" flex-col text-to-center">
      <h2 className="ff-antonio text-white uppercase fs-900">{name}</h2>
      <p className="ff-spartan  fs-600 line-h3">{context}</p>
      <span className="ff-spartan">
        Source :
        <Link
          href={srcLinkPath}
          target="_blank"
          className="src-link ff-spartan fs-600"
        >
          Wikipedia
          <IconSrc />
        </Link>
      </span>
    </Wrapper>
  );
};

export default PlanetContent;
