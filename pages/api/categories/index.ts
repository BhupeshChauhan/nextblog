import {
  createcategories,
  deletecategories,
  fetchcategories,
  updatecategories,
} from "../../../lib/actions/categories.actions";
import { validatePayload } from "../../../lib/utils";

export default async function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      return fetchcategories(req, res);
    case "POST":
      const requiredFields = ["name", "slug", "description"];
      const validate = validatePayload(req.body, requiredFields);
      if (validate?.payloadIsCurrect) {
        return createcategories(req, res);
      } else {
        return res.status(400).json({
          message: `Missing required fields: ${validate.missingFields}`,
        });
      }
    case "PUT":
      return updatecategories(req, res);
    case "DELETE":
      return deletecategories(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
