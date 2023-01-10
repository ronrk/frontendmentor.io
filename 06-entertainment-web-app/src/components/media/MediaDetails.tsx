import { FC } from "react";
import { IconCategoryMovie, IconCategoryTv } from "../ui/icons";
import Wrapper from "./MediaDetails.styled";

interface IProps {
  title: string;
  category: string;
  rating: string;
  year: number;
}

const MediaDetails: FC<IProps> = ({ title, category, rating, year }) => {
  return (
    <Wrapper>
      <ul className="info">
        <li>{year}</li>
        <li>
          {category === "Movie" ? <IconCategoryMovie /> : <IconCategoryTv />}
          {category}
        </li>
        <li>{rating}</li>
      </ul>
      <h4>{title}</h4>
    </Wrapper>
  );
};

export default MediaDetails;
