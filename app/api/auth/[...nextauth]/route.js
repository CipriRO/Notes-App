import connectMongoDB from "@/mongodb/connectMongoDB";
import Users from "@/mongodb/users";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email } = user;

      try {
        await connectMongoDB();
        const userExists = await Users.findOne({ email });
        if (!userExists) {
          const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          if (!res.ok) {
            throw new Error("Couldn't Sign In.");
          }

          return user;
        } else {
          return user;
        }
      } catch {
        throw new Error("Couldn't Sign In.");
      }
    },
  },
});

export { handler as GET, handler as POST };
