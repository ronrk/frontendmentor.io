export type TLayout = "trending" | "gallery";
export type TCategory = "Movie" | "TV Series";

export interface IMedia {
  id: string;
  title: string;
  imgSrc: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface IComponentProps {
  media: IMedia[];
  children?: JSX.Element;
}

export interface IPageProps {
  media: IMedia[];
  children?: JSX.Element;
}

export interface IMediaImage extends IMedia {
  width?: number;
  height?: number;
  fill?: boolean;
}

export interface IMediaDetails extends IMedia {}

export interface IMediaItemProps extends IMediaImage, IMediaDetails {
  key: string;
  layout: TLayout;
}

export interface IError {
  message: string;
  status: number;
}
