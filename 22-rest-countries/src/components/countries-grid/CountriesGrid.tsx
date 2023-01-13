import { FC } from "react";
import { useSelector } from "react-redux";
import { selectValue } from "../../store/slices/countriesSlice";
import { ICountryShort } from "../../types/ICountry";
import Wrapper from "./CountriesGrid.styled";
import CountryGridItem from "./CountryGridItem";

interface IProps {
  counties: ICountryShort[];
}

const CountriesGrid: FC<IProps> = ({ counties }) => {
  const { isLoading, error } = useSelector(selectValue);
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>error</h2>;
  }
  return (
    <Wrapper className="padding-inline-app">
      {counties.map((country) => (
        <CountryGridItem key={country.name} {...country} />
      ))}
    </Wrapper>
  );
};

export default CountriesGrid;
