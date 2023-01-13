import { useSelector, useDispatch } from "react-redux";
import {
  resetRenderedCountries,
  selectValue,
  setDefaultCountries,
} from "../src/store/slices/countriesSlice";
import { GetStaticProps } from "next";
import { defaultCountriesNames, getShortCountriesByName } from "../src/utils";
import { FC, useEffect } from "react";
import { ICountryShort } from "../src/types/ICountry";
import SearchBar from "../src/components/search-bar/SearchBar";
import CountriesGrid from "../src/components/countries-grid/CountriesGrid";

interface IProps {
  countries: ICountryShort[] | undefined;
  error: null | any;
}

const Home: FC<IProps> = ({ countries }) => {
  const { renderedCountries } = useSelector(selectValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDefaultCountries(countries));
    dispatch(resetRenderedCountries());
  }, [dispatch, countries]);

  let content = <h2>NO COUNTRIES</h2>;

  if (countries) {
    content = <CountriesGrid counties={renderedCountries} />;
  }

  return (
    <>
      <main>
        <SearchBar />
        {content}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  /* FETCH FOR DEFAULT COUNTRIES ON SERVER */
  let props: IProps = { countries: [], error: null };

  await Promise.all(
    defaultCountriesNames.map((countryName) =>
      getShortCountriesByName(countryName)
    )
  )
    .then((data) => data)
    .then((items) => {
      props.countries = items.flat();
    })
    .catch((error) => {
      props.error = error;
    });
  return {
    props,
  };
};

export default Home;
