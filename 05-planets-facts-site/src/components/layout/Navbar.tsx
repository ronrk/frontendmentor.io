import Link from "next/link";
import { useRouter } from "next/router";

import Wrapper from "./Navbar.styled";
import { data } from "../../utils";
import { MenuIcon } from "../ui/icons";

const Navbar = () => {
  const { query } = useRouter();
  return (
    <Wrapper className="flex">
      <h1 className="text-white ff-antonio fw-500 line-h2 fs-700">
        The Planets
      </h1>
      <nav>
        <ul className="nav-list flex">
          {data.map((planet) => (
            <li key={planet.name}>
              <Link
                href={`/${planet.name}`}
                className={
                  planet.name === query?.planet
                    ? "active navlink uppercase ff-spartan fs-600"
                    : "navlink uppercase ff-spartan fs-600"
                }
              >
                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="menu-icon">
        <MenuIcon />
      </button>
    </Wrapper>
  );
};

export default Navbar;
