import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();
  await connectMongoDB();
  const notes = await Notes.find({ user: email }).sort({ updatedAt: -1 });
  return NextResponse.json({ notes });
}
