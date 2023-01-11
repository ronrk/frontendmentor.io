import React, { FC } from "react";
import { data } from "../../utils";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "./MenuNav.styled";
import { IconArrowRight } from "../ui/icons";

interface IProps {
  handleMenu: () => void;
}

const MenuNav: FC<IProps> = ({ handleMenu }) => {
  const { query } = useRouter();
  return (
    <Wrapper>
      <nav>
        <ul className="navlist flex-col">
          {data.map((planet) => (
            <li key={planet.slug}>
              <Link
                onClick={handleMenu}
                href={`/${planet.slug}`}
                className={
                  planet.slug === query?.slug
                    ? ` flex active fw-500 text-white navlink uppercase ff-spartan  ${planet.slug}`
                    : `flex navlink fw-500 text-white uppercase ff-spartan  ${planet.slug}`
                }
              >
                <span className="color"></span>
                {planet.slug}
                <IconArrowRight className="icon-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default MenuNav;
