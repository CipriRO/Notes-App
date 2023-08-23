import connectMongoDB from "@/mongodb/connectMongoDB";
import Users from "@/mongodb/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  const user = await Users.create({ name, email });
  console.log(user);
  return NextResponse.json({ status: 200 });
}
