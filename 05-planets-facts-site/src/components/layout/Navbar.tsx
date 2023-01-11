import Link from "next/link";
import { useRouter } from "next/router";

import Wrapper from "./Navbar.styled";
import { data } from "../../utils";
import { MenuIcon } from "../ui/icons";
import { FC } from "react";

interface IProps {
  handleMenu: () => void;
}

const Navbar: FC<IProps> = ({ handleMenu }) => {
  const { query } = useRouter();
  return (
    <Wrapper className="flex-col">
      <div className="logo text-white ff-antonio fw-500 line-h2 fs-700">
        The Planets
      </div>
      <nav>
        <ul className="navlist flex">
          {data.map((planet) => (
            <li key={planet.slug}>
              <Link
                href={`/${planet.slug}`}
                className={
                  planet.slug === query?.slug
                    ? "active navlink uppercase ff-spartan fs-600"
                    : "navlink uppercase ff-spartan fs-600"
                }
              >
                {planet.slug}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="menu-icon" onClick={handleMenu}>
        <MenuIcon />
      </button>
    </Wrapper>
  );
};

export default Navbar;
