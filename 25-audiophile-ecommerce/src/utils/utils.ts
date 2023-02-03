export const navLinks = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "headphones",
    path: "/headphones",
  },
  {
    label: "speakers",
    path: "/speakers",
  },
  {
    label: "earphones",
    path: "/earphones",
  },
];

export interface IProduct {
  category: string;
  slug: string;
  description?: string;
  id: number;
  name: string;
  categoryImage: {
    desktop: string;
  };
}
