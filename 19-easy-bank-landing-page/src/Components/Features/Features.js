import React from "react";

import Wrapper from "./Features.styled";

import SingleFeature from "./SingleFeature/SingleFeature";

import { ReactComponent as IconOnline } from "../../assets/images/icon-online.svg";
import { ReactComponent as IconBudgeting } from "../../assets/images/icon-budgeting.svg";
import { ReactComponent as IconOnboarding } from "../../assets/images/icon-onboarding.svg";
import { ReactComponent as IconApi } from "../../assets/images/icon-api.svg";

const Features = () => {
  const featuredList = [
    {
      icon: <IconOnline />,
      title: "Online Banking",
      text: `Our modern web and mobile applications allow you to keep track of your finances 
        wherever you are in the world.`,
    },
    {
      icon: <IconBudgeting />,
      title: "Simple Budgeting",
      text: `See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.`,
    },
    {
      icon: <IconOnboarding />,
      title: "Fast Onboarding",
      text: `We don’t do branches. Open your account in minutes online and start taking control 
        of your finances right away.`,
    },
    {
      icon: <IconApi />,
      title: "Open API",
      text: `Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.`,
    },
  ];
  return (
    <Wrapper>
      <h2 className="heading-2">Why choose Easybank?</h2>
      <p className="features__text">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="features-container">
        {featuredList.map((item, idx) => (
          <SingleFeature {...item} key={idx} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;
