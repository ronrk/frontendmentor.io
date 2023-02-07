import Head from "next/head";
import Categories from "../src/components/shared/categories/Categories";
import FeaturedProducts from "../src/components/homepage/featuredProducts/FeaturedProducts";
import Hero from "../src/components/homepage/Hero";
import { ISectionStyle } from "../src/utils/utils";

const featuredProducts = [
  {
    name: "zx9 speaker",
    slug: "zx9-speaker",
    imageSrc: "/assets/home/desktop/image-speaker-zx9.png",
    style: ISectionStyle.PRIMARY,
  },
  {
    name: "zx7 speaker",
    slug: "zx7-speaker",
    imageSrc: "/assets/home/desktop/image-speaker-zx7.jpg",
    style: ISectionStyle.SECONDARY,
  },
  {
    name: "yx1 earphones",
    slug: "yx1-earphones",
    imageSrc: "/assets/home/desktop/image-earphones-yx1.jpg",
    style: ISectionStyle.SEPERATE,
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Audiophille | Ecommerce</title>
      </Head>
      <main className="flow">
        <Hero />
        <div className="container flow">
          <Categories />
          <FeaturedProducts featuredProducts={featuredProducts} />
        </div>
      </main>
    </>
  );
};

export default Home;
