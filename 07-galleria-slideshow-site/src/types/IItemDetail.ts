import { IItemShort } from "./IItemShort";

export interface IItemDetail extends IItemShort {
  idx: number;
  description: string;
  src: string;
  authorImg: string;
  year: number;
}
