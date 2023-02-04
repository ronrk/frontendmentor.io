import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import SingleProduct from "../../src/components/productspage/SingleProduct";
import Categories from "../../src/components/shared/categories/Categories";
import data from "../../src/utils/data.json";

interface IProps {
  products: null | any[];
  category: string;
}

const ProductsPage: FC<IProps> = ({ products, category }) => {
  if (!products || products.length === 0) {
    return (
      <main>
        <Categories />
      </main>
    );
  }
  return (
    <main>
      <h2 className="categoryPage-title heading-3 text-white">{category}</h2>
      <section className="container">
        {products.map((product) => (
          <SingleProduct
            key={product.slug}
            imageSrc={product.categoryImage.desktop}
            name={product.name}
            description={product.description}
            slug={product.slug}
            category={product.category}
            newProduct={product.new}
          />
        ))}
        <Categories />
      </section>
    </main>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as any;
  let props: IProps = {
    products: null,
    category,
  };

  const filteredData = data
    .filter((product) => product.category === category)
    .sort((a, b) => (a.new ? -1 : 1));

  props.products = filteredData;

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { category: "headphones" } },
      { params: { category: "speakers" } },
      { params: { category: "earphones" } },
    ],
    fallback: false,
  };
};

/* 
const filePath = path.join(process.cwd(),,);
const jsonData = await fs.readFile(filePath);
const data = JSON.parse(jsonData)


*/
