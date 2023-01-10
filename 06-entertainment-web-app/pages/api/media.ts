// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data.json";
import { IMedia } from "../../src/types/media";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMedia[] | any>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json(data);
      break;

    default:
      res.status(400).send(`Cant find the method for ${req.method}`);
      break;
  }
  return;
}
