import { fetchtags } from "../../../../lib/actions/tags.actions";

export default async function handler(req: any, res: any) {
  return fetchtags(req, res);
}
