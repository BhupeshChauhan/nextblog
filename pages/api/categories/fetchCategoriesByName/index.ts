import { fetchCategoriesByName } from "../../../../lib/actions/categories.actions";

export default async function handler(req: any, res: any) {
  return fetchCategoriesByName(req, res);
}
