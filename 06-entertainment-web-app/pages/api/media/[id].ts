import { NextApiRequest, NextApiResponse } from "next/types";
import { IMedia } from "../../../src/types/media";
import { editMedia, getAllMedia } from "../../../src/utils/media-server-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id;

  switch (req.method) {
    case "PATCH":
      const newMedia: IMedia = req.body;
      if (newMedia.id !== id) {
        return res.status(400).send("bad request");
      }
      const isEditOk = editMedia(newMedia);
      const updatedMedia = getAllMedia();
      isEditOk
        ? res.status(200).json(updatedMedia)
        : res.status(400).send("error error eror");
      break;
    default:
      res.status(404).send("No method with type " + req.method);
      break;
  }
  return;
}
