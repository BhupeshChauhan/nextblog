import { fetchPostByTitle } from "../../../../lib/actions/posts.actions";

export default async function handler(req: any, res: any) {
  return fetchPostByTitle(req, res);
}
