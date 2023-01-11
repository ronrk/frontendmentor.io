import { IItemDetail } from "./IItemDetail";
interface IImage {
  gallery: string;
  hero: string;
  thumbnail: string;
}

export interface IItemFull extends IItemDetail {
  images: IImage;
}
