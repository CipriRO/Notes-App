import NextAuth from "next-auth";
import { appOptions } from "@/lib/appOptions";

const handler = NextAuth(appOptions);

export { handler as GET, handler as POST };
