import Header from "./Header";
import Wrapper from "./Layout.styled";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Wrapper className="container">
      <Header />
      <hr />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
