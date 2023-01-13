import Wrapper from "./SearchBar.styled";
import { BiSearch } from "react-icons/bi";
import { FormEvent, useState } from "react";
import {
  searchCountries,
  useAppDispatch,
  filterCountriesByRegion,
} from "../../store/store";
import Dropdown from "./Dropdown";
import { IDropdownOption } from "../../types/IDropdown";
import { filtersOption } from "../../utils";
import { resetRenderedCountries } from "../../store/slices/countriesSlice";

const SearchBar = () => {
  const [term, setTerm] = useState<string>("");
  const [selection, setSelection] = useState<IDropdownOption | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term.trim() === "") return;
    dispatch(searchCountries(term));
    setSelection(null);
  };

  const handleChange = (option: IDropdownOption) => {
    if (option.value === "none") {
      setSelection(null);
      dispatch(resetRenderedCountries());
      return;
    }
    setSelection(option);
    dispatch(filterCountriesByRegion(option.value));
  };

  return (
    <Wrapper className="flex padding-inline-app" onSubmit={handleSubmit}>
      <div className="form-control flex">
        <button className="btn--search text-color">
          <BiSearch className="icon" />
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          className="fs-300 text-color"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>

      <div>
        <Dropdown
          onChange={handleChange}
          options={filtersOption}
          value={selection}
        />
      </div>
    </Wrapper>
  );
};

export default SearchBar;
