import {
  createtags,
  deletetags,
  fetchtags,
  updatetags,
} from "../../../lib/actions/tags.actions";
import { validatePayload } from "../../../lib/utils";

export default async function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      return fetchtags(req, res);
    case "POST":
      const requiredFields = ["name", "slug", "description"];
      const validate = validatePayload(req.body, requiredFields);
      if (validate?.payloadIsCurrect) {
        return createtags(req, res);
      } else {
        return res.status(400).json({
          message: `Missing required fields: ${validate.missingFields}`,
        });
      }
    case "PUT":
      return updatetags(req, res);
    case "DELETE":
      return deletetags(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
