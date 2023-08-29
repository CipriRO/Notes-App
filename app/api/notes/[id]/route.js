import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

import AuthHandler from "@/lib/AuthHandler";

export async function GET(request, { params }) {
  const user = await AuthHandler();
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  const { id } = params;
  await connectMongoDB();
  const note = await Notes.findOne({ _id: id, user });
  if (!note) {
    return NextResponse.redirect("/");
  }
  return NextResponse.json({ note });
}
