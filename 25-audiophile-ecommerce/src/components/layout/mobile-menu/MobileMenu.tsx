import styled from "styled-components";
import imgHeadphohnes from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import imgSpeakers from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import imgEarphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Category from "../../shared/categories/Category";

const StyledMenu = styled.div`
  position: absolute;
  top: 6rem;
  width: 100%;
  min-height: 50vh;
  z-index: 1000;

  & .container {
    min-width: 100%;
    height: 100%;
    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      & .category {
        margin-block: 3rem;
        position: relative;
        align-items: center;
        text-align: center;
        width: 80%;
        --gap: 1.5rem;
        background-color: hsl(var(--clr-gray));
        padding: 2rem;
        & .image__wrapper {
          min-width: 100px;
          aspect-ratio: 1;
          position: absolute;
          top: -3.5rem;
        }
        & .content {
        }
      }
    }
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

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

const MobileMenu = () => {
  return (
    <StyledMenu className="bg-white">
      <div className="container">
        <ul>
          {categoriesList.map((category) => (
            <Category key={category.title} {...category} />
          ))}
        </ul>
      </div>
    </StyledMenu>
  );
};

export default MobileMenu;
