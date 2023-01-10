import { IError, IMedia, TCategory } from "../types/media";

export const getAllMedia: () => Promise<any> = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/media");

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message, status: 404 } as IError;
    }
    return { message: "server error", status: 500 } as IError;
  }
};

export const getTrendingMedia: () => Promise<any> = async () => {
  try {
    const allMedia = await getAllMedia();
    const trendingMedia = allMedia.filter((media: IMedia) => media.isTrending);

    return trendingMedia;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message, status: 404 } as IError;
    }
    return { message: "server error", status: 500 } as IError;
  }
};

export const getMediaByCategory: (category: TCategory) => Promise<any> = async (
  category
) => {
  try {
    const allMedia = await getAllMedia();
    const mediaByCategory = allMedia.filter(
      (media: IMedia) => media.category === category
    );
    return mediaByCategory;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message, status: 404 } as IError;
    }
    return { message: "server error", status: 500 } as IError;
  }
};
