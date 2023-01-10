import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTv,
  Logo,
} from "../ui/icons";
import Wrapper from "./Sidebar.styled";

const Sidebar = () => {
  const router = useRouter();

  return (
    <Wrapper className="sidebar flex bg-blue-dark">
      <Logo />
      <nav>
        <ul className="navlist flex">
          <li>
            <Link href={"/"}>
              <IconNavHome
                className={router.pathname === "/" ? "active" : ""}
              />
            </Link>
          </li>
          <li>
            <Link href={"/movies"}>
              <IconNavMovies
                className={router.pathname === "/movies" ? "active" : ""}
              />
            </Link>
          </li>
          <li>
            <Link href={"/tv-series"}>
              <IconNavTv
                className={router.pathname === "/tv-series" ? "active" : ""}
              />
            </Link>
          </li>
          <li>
            <Link href={"/bookmark"}>
              <IconNavBookmark
                className={router.pathname === "/bookmark" ? "active" : ""}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user">
        <Image
          src={"/assets/image-avatar.png"}
          alt={""}
          width={40}
          height={40}
        />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
