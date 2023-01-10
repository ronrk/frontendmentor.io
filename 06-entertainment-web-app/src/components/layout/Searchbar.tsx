import { IconSearch } from "../ui/icons";
import Wrapper from "./Searchbar.styled";

const Searchbar = () => {
  return (
    <Wrapper className="searchbar flex">
      <IconSearch />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="text-white"
      />
    </Wrapper>
  );
};

export default Searchbar;
