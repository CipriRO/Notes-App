import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { id } = await request.json();
  await connectMongoDB();
  await Notes.findByIdAndDelete(id);
  return NextResponse.json({ status: 200 });
}

export async function POST(request) {
  const { title, content, user } = await request.json();
  await connectMongoDB();
  const newNote = await Notes.create({
    title,
    content,
    user,
    statusText: "Synced",
    status: true,
  });
  return NextResponse.json({ _id: newNote._id.toString() });
}

export async function PUT(request) {
  const { _id, title, content } = await request.json();
  await connectMongoDB();
  await Notes.findByIdAndUpdate(_id, { title, content });
  return NextResponse.json({ status: 200 });
}
