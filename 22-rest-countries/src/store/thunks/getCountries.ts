import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getShortCountriesByName,
  getShortCountriesByRegion,
} from "../../utils";

const searchCountries = createAsyncThunk(
  "countires/fetch",
  async (countryName: string) => {
    const countries = await getShortCountriesByName(countryName);
    console.log(
      "GETCOUNTRIES GETCOUNTRIES GETCOUNTRIES GETCOUNTRIES",
      countries
    );

    return countries;
  }
);

const filterCountriesByRegion = createAsyncThunk(
  "countries/filterRegion",
  async (region: string) => {
    const filteredCountris = await getShortCountriesByRegion(region);
    return filteredCountris;
  }
);

export { searchCountries, filterCountriesByRegion };
