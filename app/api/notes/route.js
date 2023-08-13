import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const notes = await Notes.find();
  return NextResponse.json({ notes });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await connectMongoDB();
  await Notes.findByIdAndDelete(id);
  return NextResponse.json({ status: 200 });
}
