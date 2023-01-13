import { ICountryDetail, ICountryShort } from "./types/ICountry";

export const defaultCountriesNames = [
  "germany",
  "usa",
  "brazil",
  "iceland",
  "afghanistan",
  "Åland Islands",
  "albania",
  "algeria",
];

export const filtersOption = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

const refactorShortCountries = (countriesArr: any[]) => {
  if (!countriesArr) {
    return [];
  }
  const countries: ICountryShort[] = countriesArr.map(
    (country): ICountryShort => {
      return {
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital ? country.capital : null,
        imgURL: country.flags.svg,
      };
    }
  );

  return countries;
};

export const getShortCountriesByRegion = async (region: string) => {
  const countries = await fetch(
    `https://restcountries.com/v3.1/region/${region}`
  )
    .then((res) => res.json())
    .then((data) => {
      return refactorShortCountries(data);
    });

  return countries;
};

export const getShortCountriesByName = async (countryName: string) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const data = await res.json();
    if (data.status === 404) {
      throw {
        message: `Can't find a countries with the name: ${countryName}`,
        statusCode: 404,
      };
    }

    const refactorData = refactorShortCountries(data);
    return refactorData;
  } catch (err) {
    throw err;
  }
};

export const getDetailedCountry = async (countryName: string) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const data = await res.json();
    let currencies: string;
    let nativeName: string;
    let languages: string[] = [];
    const [country] = data.map(async (data: any) => {
      for (let key in data.currencies) {
        currencies = `${data.currencies[key].name} ${data.currencies[key].symbol}`;
      }
      for (let key in data.name.nativeName) {
        nativeName = data.name.nativeName[key].common;
      }
      for (let key in data.languages) {
        languages.push(data.languages[key]);
      }
      const borders = data.borders
        ? await getCountryByShortName(data.borders.slice(0, 3))
        : null;

      return {
        name: data.name.common,
        population: data.population,
        region: data.region,
        capital: data.capital,
        imgURL: data.flags.svg,
        nativeName,
        subRegion: data.subregion,
        topLevelDomain: data.cioc || data.cca3,
        currencies,
        languages,
        borders,
      };
    });
    return country;
  } catch (error) {}
};

export const getCountryByShortName = async (counriesArr: string[]) => {
  const countries = Promise.all(
    counriesArr.map((countryName) =>
      fetch(`https://restcountries.com/v3.1/alpha/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
          return data[0].name.common;
        })
    )
  ).then((data) => data);

  return countries;
};
