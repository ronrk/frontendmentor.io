import logo from "../assets/logo.svg";
import scrollIcon from "/assets/icon-scroll.svg";
import Wrapper from "./Header.styled";
import imgMobile from "../assets/illustration-hero-mobile.png";
import imgDesktLeft from "../assets/illustration-hero-left.svg";
import imgDesktRight from "../assets/illustration-hero-right.svg";
const Header = () => {
  return (
    <Wrapper>
      <div className="logo">
        <img src={logo} alt="maker-logo" />
      </div>
      <div className="hero">
        <div className="hero__image mobile">
          <img src={imgMobile} alt="" />
        </div>

        <div className="title-wrapper">
          <div className="hero__image desktop left">
            <img src={imgDesktLeft} alt="" />
          </div>
          <div className="content container text-center">
            <h1 className="fs-800 text-white line-h-4">
              Get paid for the work you
              <span className="love text-primary"> love </span> to do.
            </h1>
            <p className="fs-400 text-white-5 line-h-1">
              The 9-5 grind is so last century. We believe in living life on
              your own terms. Whether you’re looking to escape the rat race or
              set up a side hustle, we’ve got you covered.
            </p>
            <img src={scrollIcon} alt="scroll icon" />
          </div>
          <div className="hero__image desktop right">
            <img src={imgDesktRight} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
