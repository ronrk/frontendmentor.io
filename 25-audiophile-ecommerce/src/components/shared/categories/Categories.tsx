import React from "react";
import CategoriesWrapper from "./Categories.wrapper";
import imgHeadphohnes from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import imgSpeakers from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import imgEarphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Category from "./Category";

const categoriesList = [
  {
    title: "headphones",
    path: "/headphones",
    imageSrc: imgHeadphohnes,
  },
  {
    title: "speakers",
    path: "/speakers",
    imageSrc: imgSpeakers,
  },
  {
    title: "earphones",
    path: "/earphones",
    imageSrc: imgEarphones,
  },
];

const Categories = () => {
  return (
    <CategoriesWrapper>
      <ul className="flex">
        {categoriesList.map((item, idx) => (
          <Category {...item} key={idx} />
        ))}
      </ul>
    </CategoriesWrapper>
  );
};

export default Categories;
