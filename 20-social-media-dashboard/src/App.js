import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MainStats from "./Components/MainStats";
import OverviewStats from "./Components/OverviewStats";
import { ReactComponent as IconFacebook } from "./assets/images/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "./assets/images/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "./assets/images/icon-twitter.svg";
import { ReactComponent as IconYoutube } from "./assets/images/icon-youtube.svg";

const mainStatsObjects = [
  {
    icon: <IconFacebook />,
    tagName: "@nathanf",
    number: 1987,
    type: "Followers",
    changeNumber: 12,
    changeType: true,
    className: "facebook",
  },
  {
    icon: <IconTwitter />,
    tagName: "@nathanf",
    number: 1044,
    type: "Followers",
    changeNumber: 99,
    changeType: true,
    className: "twitter",
  },
  {
    icon: <IconInstagram />,
    tagName: "@realnathanf",
    number: "11k",
    type: "Followers",
    changeNumber: 1099,
    changeType: true,
    className: "instagram",
  },
  {
    icon: <IconYoutube />,
    tagName: "Nathan F.",
    number: 8239,
    type: "Subscribes",
    changeNumber: 144,
    changeType: false,
    className: "youtube",
  },
];

const overviewStatsObjects = [
  {
    label: "Page Views",
    icon: <IconFacebook />,
    number: 87,
    change: 12,
    changeType: true,
    className: "facebook",
  },
  {
    label: "Likes",
    icon: <IconFacebook />,
    number: 52,
    change: 2,
    changeType: false,
    className: "facebook",
  },
  {
    label: "Likes",
    icon: <IconInstagram />,
    number: 5462,
    change: 2257,
    changeType: true,
    className: "instagram",
  },
  {
    label: "Profile Views",
    icon: <IconInstagram />,
    number: "52K",
    change: 1375,
    changeType: true,
    className: "instagram",
  },
  {
    label: "Retweets",
    icon: <IconTwitter />,
    number: 117,
    change: 303,
    changeType: true,
    className: "twitter",
  },
  {
    label: "Likes",
    icon: <IconTwitter />,
    number: 507,
    change: 553,
    changeType: true,
    className: "twitter",
  },
  {
    label: "Likes",
    icon: <IconYoutube />,
    number: 107,
    change: 19,
    changeType: false,
    className: "youtube",
  },
  {
    label: "Total Views",
    icon: <IconYoutube />,
    number: 1407,
    change: 12,
    changeType: false,
    className: "youtube",
  },
];

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <div
      className={
        darkTheme ? "app-container dark-theme" : "app-container light-theme"
      }
    >
      <Header onToggle={toggleTheme} />
      <section className="main-stats">
        {mainStatsObjects.map((item, i) => (
          <MainStats {...item} key={i} />
        ))}
      </section>
      <h2 className="overview__heading">Overview - Today</h2>
      <section className="overview-stats">
        {overviewStatsObjects.map((item, i) => (
          <OverviewStats key={i} {...item} />
        ))}
      </section>
    </div>
  );
};

export default App;
