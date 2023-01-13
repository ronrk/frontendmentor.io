import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { ICountryDetail } from "../../types/ICountry";
import Wrapper from "./SingleCountry.styled";

interface IProps {
  country: ICountryDetail | null;
}

const SingleCountry: FC<IProps> = ({ country }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayCountry, setDisplayCountry] = useState(country);

  useEffect(() => {
    if (!country) {
      setIsLoading(true);
      return;
    }
    setIsLoading(false);
    setDisplayCountry(country);
  }, [country]);

  if (isLoading) {
    return (
      <Wrapper className="fs-500">
        <h2>Loading</h2>
      </Wrapper>
    );
  }
  if (!displayCountry) {
    return (
      <Wrapper className="fs-500">
        <h2>Error</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="text-color">
      <div className="image-wrapper">
        <Image
          src={displayCountry.imgURL}
          alt={displayCountry.name}
          width={320}
          height={230}
        />
      </div>
      <div className="content flex-col">
        <h2 className="fs-500">{displayCountry.name}</h2>
        <div className="stats flex-col">
          <ul className="stats_list">
            <li className="fw-b">
              Native Name:{" "}
              <span className="fw-l">{displayCountry.nativeName}</span>
            </li>
            <li className="fw-b">
              Population:
              <span className="fw-l">
                {displayCountry.population.toLocaleString()}
              </span>
            </li>
            <li className="fw-b">
              Region: <span className="fw-l">{displayCountry.region}</span>
            </li>
            <li className="fw-b">
              Sub Region:{" "}
              <span className="fw-l">{displayCountry.subRegion}</span>
            </li>
            <li className="fw-b">
              Capital: <span className="fw-l">{displayCountry.capital}</span>
            </li>
          </ul>
          <ul className="stats_list">
            <li className="fw-b">
              Top Level Domain:
              <span className="fw-l">{displayCountry.topLevelDomain}</span>
            </li>
            <li className="fw-b">
              Currencies:{" "}
              <span className="fw-l">{displayCountry.currencies}</span>
            </li>
            <li className="fw-b">
              Languages:{" "}
              <span className="fw-l">{displayCountry.languages.join(",")}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="borders flex">
        {displayCountry.borders &&
          displayCountry.borders.map((item) => (
            <Link
              href={`/${item}`}
              key={item}
              className="country-border box text-color"
              onClick={() => {
                setIsLoading(true);
              }}
            >
              {item}
            </Link>
          ))}
      </div>
    </Wrapper>
  );
};

export default SingleCountry;
