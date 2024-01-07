import { NextResponse } from "next/server";
import { fetchUser } from "../../../../lib/actions/user.actions";
import User from "../../../../lib/models/user.model";
import { connectToDB } from "../../../../lib/mongoose";
import { validatePayload } from "../../../../lib/utils";

export default async function handler(req: any, res: any) {
  return fetchUser(req, res);
}
