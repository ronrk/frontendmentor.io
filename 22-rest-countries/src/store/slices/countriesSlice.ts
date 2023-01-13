import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  searchCountries,
  filterCountriesByRegion,
} from "../thunks/getCountries";
import { ICountryDetail, ICountryShort } from "../../types/ICountry";

export interface CountriesState {
  renderedCountries: any[];
  defaultCountries: string[];
  singleCountry: ICountryDetail | null;
  error: null | any;
  isLoading: boolean;
  darkTheme: boolean;
}

const initialState: CountriesState = {
  renderedCountries: [],
  defaultCountries: [],
  singleCountry: null,
  error: null,
  isLoading: false,
  darkTheme: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries: (state, action: PayloadAction<string>) => {
      state.renderedCountries.push(action.payload);
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    setDefaultCountries: (state, action) => {
      state.defaultCountries = action.payload;
    },
    resetRenderedCountries: (state) => {
      state.renderedCountries = state.defaultCountries;
    },
  },
  extraReducers(builder) {
    builder.addCase(searchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.renderedCountries = action.payload as ICountryShort[];
    });
    builder.addCase(searchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(filterCountriesByRegion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterCountriesByRegion.fulfilled, (state, action) => {
      state.renderedCountries = action.payload;
      state.isLoading = false;
    });
    builder.addCase(filterCountriesByRegion.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  getCountries,
  toggleTheme,
  setDefaultCountries,
  resetRenderedCountries,
} = countriesSlice.actions;
export const selectValue = (state: RootState) => state.countries;
export default countriesSlice.reducer;
