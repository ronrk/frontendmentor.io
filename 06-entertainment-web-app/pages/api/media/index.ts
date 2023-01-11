// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/data.json";
import { IMedia } from "../../../src/types/media";
import { getAllMedia } from "../../../src/utils/media-server-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMedia[] | any>
) {
  switch (req.method) {
    case "GET":
      const result: {
        allMedia: IMedia[];
        trendingMedia: IMedia[];
        bookmarkedMedia: IMedia[];
      } = getAllMedia();
      res.status(200).json({ result });
      break;

    default:
      res.status(400).send(`Cant find the method for ${req.method}`);
      break;
  }
  return;
}
