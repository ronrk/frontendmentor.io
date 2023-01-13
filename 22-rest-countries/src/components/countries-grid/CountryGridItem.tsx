import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ICountryShort } from "../../types/ICountry";
import Wrapper from "./CountryGridItem.styled";

const CountryGridItem: FC<ICountryShort> = ({
  name,
  population,
  imgURL,
  region,
  capital,
}) => {
  return (
    <Link href={`/${name}`}>
      <Wrapper className="box">
        <div className="image-wrapper">
          <Image src={imgURL} alt={name} width={400} height={200} />
        </div>

        <div className="content text-color flex-col">
          <h2 className="fs-500">{name}</h2>
          <div className="stats">
            <div className="flex">
              <h3 className="fs-200">Population:</h3>
              <span className="fs-100">{population.toLocaleString()}</span>
            </div>
            <div className="flex">
              <h3 className="fs-200">Region:</h3>
              <span className="fs-100">{region}</span>
            </div>
            <div className="flex">
              <h3 className="fs-200">Capital</h3>
              <span className="fs-100">{capital}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
};

export default CountryGridItem;
