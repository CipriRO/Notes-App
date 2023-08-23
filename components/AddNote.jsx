"use client";
import { motion } from "framer-motion";
import * as Icons from "@/components/Icons";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next-nprogress-bar";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const AddNote = () => {
  const router = useRouter();
  const notesState = useSelector((state) => state.notes.status);
  const { data: session, status } = useSession();

  return (
    <motion.section
      // onClick={() =>
      //   notesState !== "loading" && router.push("/note/create-note")
      // }
      layoutId="create-note"
      layout
      className={`flex flex-col justify-center items-center p-4 h-72 w-80 ${
        notesState !== "loading" && "cursor-pointer"
      } bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl shadow-xl`}
    >
      <div className="relative flex flex-col gap-3 justify-center items-center h-full w-full">
        {!session && (
          <>
            <motion.div
              onClick={() => signIn("google")}
              layoutId="signIn"
              className="dark:bg-box-primary-dark py-2 px-3 rounded-full flex justify-center items-center gap-2 text-color w-fit"
            >
              <Icons.google />
              <h4 className="font-semibold">
                {status === "loading"
                  ? "Signing with Google"
                  : status === "unauthenticated" && "Sign In with Google"}
              </h4>
            </motion.div>
            <h1 className="text-center font-semibold">
              Sign In to access Notes from your account!
            </h1>
          </>
        )}

        {status === "authenticated" && (
          <>
            <motion.div
              onClick={() => signOut()}
              layoutId="signIn"
              className="absolute top-0 dark:bg-box-primary-dark py-2 px-3 rounded-full flex justify-center items-center gap-2 text-color w-fit"
            >
              <Image
                src={session.user.image}
                alt="User Image"
                height={32}
                width={32}
                className="rounded-full"
              />
              <h4 className="font-semibold">{session.user.name}</h4>
            </motion.div>

            <div className="flex flex-col gap-3 items-center">
              <div className="p-3 rounded-full w-16 aspect-square shadow-lg title-color dark:bg-box-primary-dark bg-box-primary-light">
                {notesState === "idle" ? (
                  <Icons.plus className="w-full h-full" />
                ) : (
                  notesState === "loading" && (
                    <Ring
                      size={40}
                      lineWeight={5}
                      speed={2}
                      color="currentColor"
                    />
                  )
                )}
              </div>
              <h1 className="text-lg font-semibold">
                {notesState === "idle"
                  ? "Create a new Note"
                  : notesState === "loading" && "Loading Notes..."}
              </h1>
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default AddNote;
