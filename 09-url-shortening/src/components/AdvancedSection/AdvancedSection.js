import React from "react";
import Wrapper from "./AdvancedSection.styled";
import brandIcon from "../../images/icon-brand-recognition.svg";
import detaildIcon from "../../images/icon-detailed-records.svg";
import customIcon from "../../images/icon-fully-customizable.svg";
import AdvancedArticle from "./AdvancedArticle";

const statistics = [
  {
    title: "Brand Recognition",
    text: `Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
    icon: brandIcon,
  },
  {
    title: "Detailed Records",
    text: `Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.`,
    icon: detaildIcon,
  },
  {
    title: "Fully Customizable",
    text: `Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.`,
    icon: customIcon,
  },
];

const AdvancedSection = () => {
  return (
    <Wrapper className="container">
      <h2 className="text-dark fs-700">Advanced Statistics</h2>
      <p className="text-light fs-500">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="advanced__container flex-c">
        {statistics.map((item, idx) => {
          return <AdvancedArticle key={item.title + idx} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default AdvancedSection;
