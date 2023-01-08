import Link from "next/link";
import React, { FC } from "react";
interface IProps {
  name: string;
  curContext: string;
  context: string;
  srcUrl: string;
}

const PlanetContent: FC<IProps> = ({ name, context, curContext, srcUrl }) => {
  const srcLinkPath = `${srcUrl}${curContext !== "overview" ? curContext : ""}`;

  return (
    <div className="planet-content flex-col text-to-center">
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
        </Link>
      </span>
    </div>
  );
};

export default PlanetContent;
