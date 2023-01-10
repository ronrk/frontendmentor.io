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
    <Wrapper className="info media_details flex-col">
      <ul className=" flex info-list">
        <li className="text-body-s">{year}</li>
        <li className="text-body-s">
          {category === "Movie" ? <IconCategoryMovie /> : <IconCategoryTv />}
          {category}
        </li>
        <li className="text-body-s">{rating}</li>
      </ul>
      <h4 className="text-heading-xs">{title}</h4>
    </Wrapper>
  );
};

export default MediaDetails;
