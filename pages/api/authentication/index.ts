import {
  createUser,
  deleteUser,
  fetchUser,
  updateUser,
} from "../../../lib/actions/user.actions";
import { validatePayload } from "../../../lib/utils";

export default async function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      return fetchUser(req, res);
    case "POST":
      const requiredFields = ["name", "email", "password"];
      const validate = validatePayload(req.body, requiredFields);
      if (validate?.payloadIsCurrect) {
        return createUser(req, res);
      } else {
        return res.status(400).json({
          message: `Missing required fields: ${validate.missingFields}`,
        });
      }
    case "PUT":
      return updateUser(req, res);
    case "DELETE":
      return deleteUser(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}
