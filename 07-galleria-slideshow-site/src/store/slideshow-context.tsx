import { createContext, FC, useContext, useState } from "react";

interface IContext {
  isSlideshow: boolean;
  startSlideshow: () => void;
  stopSlideshow: () => void;
}

const SlideshowContext = createContext<IContext>({
  isSlideshow: false,
  startSlideshow: () => {},
  stopSlideshow: () => {},
});

const SlideshowProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [isSlideshow, setIsSlideshow] = useState(false);

  const startSlideshow = () => {
    setIsSlideshow(true);
  };
  const stopSlideshow = () => {
    setIsSlideshow(false);
  };

  return (
    <SlideshowContext.Provider
      value={{ startSlideshow, stopSlideshow, isSlideshow }}
    >
      {children}
    </SlideshowContext.Provider>
  );
};

export default SlideshowProvider;

export const useSlideshowContext = () => useContext(SlideshowContext);
