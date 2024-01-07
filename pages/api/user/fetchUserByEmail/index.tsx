import { fetchUserByEmail } from "../../../../lib/actions/user.actions";
import { validatePayload } from "../../../../lib/utils";

export default async function handler(req: any, res: any) {
  const requiredFields = ["email"];
  const validate = validatePayload(req.body, requiredFields);
  if (validate?.payloadIsCurrect) {
    return fetchUserByEmail(req, res);
  } else {
    return res.status(400).json({
      message: `Missing required fields: ${validate.missingFields}`,
    });
  }
}
