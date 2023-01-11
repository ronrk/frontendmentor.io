import axios from "axios";

import { createContext, FC, useContext, useState } from "react";
import { IMediaContext, MediaState } from "../types/icontext";
import { IError, IMedia, TCategory } from "../types/media";

const MediaContext = createContext<IMediaContext>({
  allMedia: [],
  trendingMedia: [],
  bookmarkedMedia: [],

  handleBookmarkChange: () => {},
  updateMediaState: (stateToUpdate) => {},
});

const MediaContextProvider: FC<{ children: JSX.Element; test?: string }> = ({
  children,
  test,
}) => {
  const [allMedia, setAllMedia] = useState<IMedia[]>([]);
  const [bookmarkedMedia, setBookmarkedMedia] = useState<IMedia[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<IMedia[]>([]);
  const [trendingMedia, setTrendingMedia] = useState<IMedia[]>([]);

  const updateMediaState = (stateToUpdate: MediaState) => {
    setAllMedia(stateToUpdate.allMedia);
    setTrendingMedia(stateToUpdate.trendingMedia);
  };

  const handleBookmarkChange = () => {};

  return (
    <MediaContext.Provider
      value={{
        allMedia,
        bookmarkedMedia,
        trendingMedia,
        handleBookmarkChange,
        updateMediaState,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;

export const useMediaContext = () => useContext(MediaContext);
