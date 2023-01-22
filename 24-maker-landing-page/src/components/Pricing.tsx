import { FC } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import iconCheck from "../assets/icon-check.svg";
import Wrapper from "./Pricing.styled";

interface IProps {
  img: string;
  title: string;
  context: string;
  listTitle: string;
  listItems: string[];
  free?: boolean;
  color: "white" | "black";
}

const Pricing: FC<IProps> = ({
  img,
  title,
  context,
  listTitle,
  listItems,
  free,
  color,
}) => {
  return (
    <Wrapper className={color === "white" ? "bg-secondary" : "bg-primary"}>
      <img className="pricing-icon" src={img} alt={title} />
      <div className="content">
        <h3 className={`fs-600 text-${color} fw-m line-h-3`}>{title}</h3>
        <p className={`fs-400 text-${color}-5 line-h-1`}>{context}</p>
      </div>
      <div className="list">
        {free ? (
          <h2 className={`fs-700 text-${color}`}>{listTitle}</h2>
        ) : (
          <h2 className={`fs-700 text-${color}`}>
            {listTitle} <span className="fs-500 text-black-5">/month</span>
          </h2>
        )}

        <ul>
          {listItems.map((li, idx) => (
            <li key={idx} className={`text-${color} fs-400 line-h-2`}>
              <AiOutlineCheck
                className={
                  color === "white" ? "icon text-primary" : "icon text-black"
                }
              />
              {li}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Pricing;
