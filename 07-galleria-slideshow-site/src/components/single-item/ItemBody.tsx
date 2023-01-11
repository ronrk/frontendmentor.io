import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  description: string;
  year: number;
  src: string;
}

const ItemBody: FC<IProps> = ({ description, year, src }) => {
  return (
    <section>
      <div className="year text-display">{year}</div>
      <p className="text-body">{description}</p>
      <Link href={src} className="text-link-2">
        go to source
      </Link>
    </section>
  );
};

export default ItemBody;
