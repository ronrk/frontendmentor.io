import React, { FC } from "react";

interface IProps {
  name: string;
  author: string;
}

const ItemActions: FC<IProps> = ({ name, author }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default ItemActions;
