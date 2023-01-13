export interface ICountryShort {
  name: string;
  population: number;
  region: string;
  capital?: string;
  imgURL: string;
}

export interface ICountryDetail extends ICountryShort {
  nativeName: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string;
  languages: string[];
  borders: string[] | null;
}
