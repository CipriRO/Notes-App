import connectMongoDB from "@/mongodb/connectMongoDB";
import Notes from "@/mongodb/notes";
import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { appOptions } from "@/lib/appOptions";

const authHandler = async (req, res) => {
  const session = await getServerSession(appOptions);
  console.log(session);

  if (!session) {
    return null;
  } else {
    return session.user.email;
  }
};

export async function GET(req, res) {
  const user = await authHandler(req, res);
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  await connectMongoDB();
  const notes = await Notes.find({ user }).sort({ updatedAt: -1 });
  return NextResponse.json({ notes });
}

export async function DELETE(request, response) {
  const user = await authHandler(request, response);
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  const { id } = await request.json();
  await connectMongoDB();
  await Notes.findOneAndDelete({ _id: id, user });
  return NextResponse.json(null, { status: 200 });
}

export async function POST(request, response) {
  const user = await authHandler(request, response);

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

export async function PUT(request, response) {
  const user = await authHandler(request, response);
  if (!user) {
    return NextResponse.json(null, { status: 401 });
  }

  const { _id, title, content } = await request.json();
  await connectMongoDB();
  await Notes.findOneAndUpdate({ _id, user }, { title, content });
  return NextResponse.json({ status: 200 });
}
