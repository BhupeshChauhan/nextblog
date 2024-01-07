import { fetchcategories } from "../../../../lib/actions/categories.actions";

export default async function handler(req: any, res: any) {
  return fetchcategories(req, res);
}
