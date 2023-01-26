import { FC } from "react";
import Card, { ColorType } from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import Timer from "../components/Timer/Timer";
import StyledLink from "../components/ui/StyledLink";

interface IProps {
  targetTime: number;
}

const cardData = [
  {
    color: ColorType.WHITE,
    type: "Basic",
    price: "Free",
    title: "Up to 5 users for free",
    listItems: [
      "Basic document collaboration",
      "2 GB storage",
      "Great security and support",
    ],
  },
  {
    color: ColorType.PRIMARY,
    type: "Pro",
    price: "$9.99",
    title: "Per user, billed monthly",
    listItems: [
      "All essential integrations",
      "50 GB storage",
      "More control and insights",
    ],
  },
  {
    color: ColorType.WHITE,
    type: "Ultimate",
    price: "$19.99",
    title: "Per user, billed monthly",
    listItems: ["Robust work management", "100 GB storage", "VIP support"],
  },
];

const HomePage: FC<IProps> = ({ targetTime }) => {
  return (
    <div>
      <Hero />
      <div className="cards-container">
        {cardData.map((data, i) => (
          <Card
            key={i}
            title={data.title}
            price={data.price}
            type={data.type}
            listItems={data.listItems}
            color={data.color}
          />
        ))}
      </div>
      <div className="timer-wrapper">
        <Timer countdownTimerstampMs={targetTime} theme="light" />
        <StyledLink
          className="timer-link fs-800"
          to={"/register"}
          color={ColorType.PRIMARY}
          shadow
          text={ColorType.WHITE}
        >
          Get Started
        </StyledLink>
      </div>
    </div>
  );
};

export default HomePage;
