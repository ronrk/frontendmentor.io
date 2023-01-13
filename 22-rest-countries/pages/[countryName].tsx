import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";
import { BiArrowBack } from "react-icons/bi";
import SingleCountry from "../src/components/single-country/SingleCountry";
import { ICountryDetail } from "../src/types/ICountry";
import { getDetailedCountry } from "../src/utils";

interface IProps {
  country: ICountryDetail | null;
  error: null | any;
}

const CountryDetailedPage: FC<IProps> = ({ country }) => {
  if (!country) {
    return (
      <div className="single-page padding-inline-app">
        <Link href={"/"} className="back-nav flex text-color fs-200 box ">
          <BiArrowBack className="icon" />
          Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`Where in the world? : ${country.name}`}</title>
        <meta
          name="description"
          content={`General information on ${country.name}`}
        />
        <link rel="icon" href={country.imgURL} />
      </Head>
      <div className="single-page padding-inline-app">
        <Link href={"/"} className="back-nav flex text-color fs-200 box ">
          <BiArrowBack className="icon" />
          Back
        </Link>

        <SingleCountry country={country} />
      </div>
    </>
  );
};

export default CountryDetailedPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { countryName } = context.params as any;
  let props: IProps = {
    country: null,
    error: null,
  };
  if (!countryName) {
    props.error = {
      message: `can't get counry with name : ${countryName}`,
      statusCode: 404,
    };
    return { props };
  }

  await getDetailedCountry(countryName)
    .then((data: ICountryDetail) => (props.country = data))
    .catch((err) => (props.error = err));

  return {
    props,
  };
};
