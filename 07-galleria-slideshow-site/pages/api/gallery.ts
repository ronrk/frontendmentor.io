import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
  getAllItems,
  getDetailItem,
  getGalleryItems,
} from "../../src/utils/gallery-server-util";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      if (id) {
        const galleryItem = getDetailItem(Number(id));

        galleryItem
          ? res.status(200).json({ galleryItem })
          : res.status(404).send("not found");
        break;
      }
      const galleryItems = getGalleryItems();
      res.status(200).json({ galleryItems });
      break;

    default:
      throw `Can't find a method: ${req.method}`;
  }
}
