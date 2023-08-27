import { useRouter } from "next-nprogress-bar";
import { useSession } from "next-auth/react";

const useSessionRedirect = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") {
    router.push("/");
    return { isLoading: true };
  } else if (status === "loading") {
    return { isLoading: true };
  } else if (status === "authenticated") {
    return { isLoading: false };
  }
};

export default useSessionRedirect;
