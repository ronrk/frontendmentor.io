import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderHero from "./HeaderHero/HeaderHero";
import Wrapper from "./Layout.styled";

interface IProps {
  children?: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Wrapper className={location.pathname.replace("/", "")}>
      <div className="bg-header"></div>
      <HeaderHero />
      <main>{children}</main>
      <div className="bg-footer"></div>
    </Wrapper>
  );
};

export default Layout;
