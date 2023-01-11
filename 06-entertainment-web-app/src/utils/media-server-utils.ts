import { IError, IMedia, TCategory } from "../types/media";
import data from "../../data/data.json";
import fs from "fs";
import path from "path";

export const editMedia = (media: IMedia): boolean => {
  const { id } = media;
  const indexFound: number = data.findIndex((m) => m.id === id);

  if (indexFound < 0) return false;
  data[indexFound] = media;
  saveData();
  return true;
};

const saveData = (): void => {
  const dataToSave = JSON.stringify(data);
  fs.writeFileSync(path.join("data", "data.json"), dataToSave);
};

export const getAllMedia = (): {
  allMedia: IMedia[];
  trendingMedia: IMedia[];
  bookmarkedMedia: IMedia[];
} => {
  const allMedia = data.sort((m) => {
    if (!m.isTrending) return -1;
    return 1;
  });
  const trendingMedia = allMedia.filter((media) => media.isTrending);
  const bookmarkedMedia = allMedia.filter((media) => media.isBookmarked);

  return { allMedia, trendingMedia, bookmarkedMedia };
};

export const getMediaByCategory = (category: TCategory) => {
  const { allMedia } = getAllMedia();
  const mediaByCategory = allMedia.filter(
    (media: IMedia) => media.category === category
  );
  return mediaByCategory;
};
