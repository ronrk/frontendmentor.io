import data from "../../data/data.json";
import { IItemDetail } from "../types/IItemDetail";
import { IItemFull } from "../types/IItemFull";
import { IItemShort } from "../types/IItemShort";

export const getAllItems = (): IItemFull[] => {
  const galleryItems: IItemFull[] = data.map((item, idx) => {
    const { name, year, description, source, artist, images } = item;
    const slug = name.replaceAll(" ", "-").toLowerCase();
    const galleryItem: IItemFull = {
      slug: slug,
      name,
      author: artist.name,
      images: {
        hero: images.hero.large,
        thumbnail: images.thumbnail,
        gallery: images.gallery,
      },
      image: "",
      idx,
      description,
      src: source,
      authorImg: artist.image,
      year,
    };

    return galleryItem;
  });

  return galleryItems;
};

export const getGalleryItems = (): IItemShort[] => {
  return getAllItems().map(({ slug, name, author, images }) => ({
    slug,
    name,
    author,
    image: images.gallery,
  }));
};

export const getDetailItem = (idx: number): IItemDetail | null => {
  const allItems = getAllItems();
  const detailedItems: IItemDetail[] = allItems.map(
    ({
      name,
      description,
      images,
      year,
      author,
      authorImg,
      src,
      slug,
      idx,
    }) => ({
      idx,
      description,
      image: images.hero,
      year,
      author,
      authorImg,
      src,
      name,
      slug,
    })
  );
  return detailedItems.find((item) => item.idx === idx) || null;
};
