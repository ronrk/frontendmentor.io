import Link from "next/link";
import { useSlideshowContext } from "../../store/slideshow-context";
import { Logo } from "../ui/icons";
import Wrapper from "./Header.styled";

const Header = () => {
  const { isSlideshow, startSlideshow, stopSlideshow } = useSlideshowContext();
  return (
    <Wrapper className="flex">
      <Logo />

      <Link
        href={isSlideshow ? "/" : "/slideshow?id=0"}
        className="text-link-1"
        onClick={isSlideshow ? stopSlideshow : startSlideshow}
      >
        {isSlideshow ? "stop" : "start"} slideshow
      </Link>
    </Wrapper>
  );
};

export default Header;
