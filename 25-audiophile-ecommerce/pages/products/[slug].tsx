import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import Categories from "../../src/components/shared/categories/Categories";
import ProductFeatures from "../../src/components/singleproductpage/ProductFeatures";
import ProductGallery from "../../src/components/singleproductpage/ProductGallery";
import ProductHeader from "../../src/components/singleproductpage/ProductHeader";
import RelativeProducts from "../../src/components/singleproductpage/RelativeProducts";
import data from "../../src/utils/data.json";

interface IProps {
  product: any;
}

const SingleProductPage: FC<IProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Audiophille | {product.name}</title>
      </Head>

      <main>
        <div className="container flow flow-space--big">
          <ProductHeader
            name={product.name}
            description={product.description}
            price={product.price}
            categoryImage={product.categoryImage.desktop}
            slug={product.slug}
          />
          <ProductFeatures
            features={product.features}
            includes={product.includes}
          />
          <ProductGallery gallery={product.gallery} name={product.name} />
          <RelativeProducts otherProducts={product.others} />
          <Categories />
        </div>
      </main>
    </>
  );
};

export default SingleProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, category } = context.params as any;
  let props: IProps = {
    product: null,
  };

  const product = data.find((p) => p.slug === slug);
  if (!product) {
    return {
      redirect: {
        destination: `/products/${category}`,
        permanent: true,
      },
    };
  }

  props.product = product;
  return {
    props,
  };
};
