import {
  createposts,
  deleteposts,
  fetchposts,
  updateposts,
} from "../../../lib/actions/posts.actions";
import { validatePayload } from "../../../lib/utils";

export default async function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      return fetchposts(req, res);
    case "POST":
      const requiredFields = [
        "title",
        "featuredImage",
        "content",
        "categories",
        "tags",
        "excerpt",
        "visibility",
        "focusKeyword",
        "seoTitle",
        "metaDescription",
        "canonicalUrl",
        "author",
      ];
      const validate = validatePayload(req.body, requiredFields);
      if (validate?.payloadIsCurrect) {
        return createposts(req, res);
      } else {
        return res.status(400).json({
          message: `Missing required fields: ${validate.missingFields}`,
        });
      }
    case "PUT":
      return updateposts(req, res);
    case "DELETE":
      return deleteposts(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
