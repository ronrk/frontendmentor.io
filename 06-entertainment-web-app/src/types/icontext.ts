import { IMedia } from "./media";

export interface MediaState {
  allMedia: IMedia[];
  trendingMedia: IMedia[];
  bookmarkedMedia?: IMedia[];
}

export interface IMediaContext {
  allMedia: IMedia[];
  trendingMedia: IMedia[];
  bookmarkedMedia: IMedia[];
  handleBookmarkChange: () => void;
  updateMediaState: (stateToUpdate: MediaState) => void;
}
