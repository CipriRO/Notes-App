import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

import AuthHandler from "@/lib/AuthHandler";

export async function GET() {
  const user = await AuthHandler();
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  await connectMongoDB();
  const notes = await Notes.find({ user }).sort({ updatedAt: -1 });
  return NextResponse.json({ notes });
}

export async function DELETE(request) {
  const user = await AuthHandler();
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  const { id } = await request.json();
  await connectMongoDB();
  await Notes.findOneAndDelete({ _id: id, user });
  return NextResponse.json(null, { status: 200 });
}

export async function POST(request) {
  const user = await AuthHandler();

  const { title, content, user: userId } = await request.json();
  if (!user || user !== userId) {
    return NextResponse.json(null, { status: 401 });
  }

  await connectMongoDB();
  const newNote = await Notes.create({
    title,
    content,
    user: userId,
    statusText: "Synced",
    status: true,
  });
  return NextResponse.json({ _id: newNote._id.toString() });
}

export async function PUT(request) {
  const user = await AuthHandler();
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  const { _id, title, content } = await request.json();
  await connectMongoDB();
  await Notes.findOneAndUpdate({ _id, user }, { title, content });
  return NextResponse.json({ status: 200 });
}
