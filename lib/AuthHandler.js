import { getServerSession } from "next-auth/next";
import { appOptions } from "@/lib/appOptions";

const AuthHandler = async () => {
  const session = await getServerSession(appOptions);

  if (!session) {
    return null;
  } else {
    return session.user.email;
  }
};

export default AuthHandler;
