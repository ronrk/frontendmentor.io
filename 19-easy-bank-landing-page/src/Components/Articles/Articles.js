import React from "react";

import SingleArticle from "./SingleArticle/SingleArticle";

import Wrapper from "./Articles.styled";

import imgConfetti from "../../assets/images/image-confetti.jpg";
import imgCurrency from "../../assets/images/image-currency.jpg";
import imgPlane from "../../assets/images/image-plane.jpg";
import imgRestaurant from "../../assets/images/image-restaurant.jpg";

const Articles = () => {
  const articlesList = [
    {
      image: imgCurrency,
      author: `Claire Robinson`,
      title: `Receive money in any currency with no fees`,
      text: `The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …`,
    },
    {
      image: imgRestaurant,
      author: `Wilson Hutton`,
      title: `Treat yourself without worrying about money`,
      text: `Our simple budgeting feature allows you to separate out your spending and set 
      realistic limits each month. That means you …`,
    },
    {
      image: imgPlane,
      author: `Wilson Hutton`,
      title: `Take your Easybank card wherever you go`,
      text: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
      while you’re abroad. We’ll even show you …`,
    },
    {
      image: imgConfetti,
      author: `Claire Robinson`,
      title: `Our invite-only Beta accounts are now live!`,
      text: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
      It’s easy to request an invite through the site ...`,
    },
  ];

  return (
    <Wrapper>
      <h2 className="heading-2">Latest Articles</h2>
      <div className="articles-container">
        {articlesList.map((item, idx) => (
          <SingleArticle {...item} key={idx} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Articles;
