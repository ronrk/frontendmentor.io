import Image from "next/image";
import Link from "next/link";
import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTv,
  Logo,
} from "../ui/icons";
import Wrapper from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <Wrapper className="sidebar flex bg-blue-dark">
      <Logo />
      <nav>
        <ul className="navlist flex">
          <li>
            <Link href={"/"}>
              <IconNavHome />
            </Link>
          </li>
          <li>
            <Link href={"/movies"}>
              <IconNavMovies />
            </Link>
          </li>
          <li>
            <Link href={"/tv-series"}>
              <IconNavTv />
            </Link>
          </li>
          <li>
            <Link href={"/bookmark"}>
              <IconNavBookmark />
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
