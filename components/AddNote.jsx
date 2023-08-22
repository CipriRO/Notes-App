"use client";
import { motion } from "framer-motion";
import * as Icons from "@/components/Icons";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next-nprogress-bar";
import { useSelector } from "react-redux";

const AddNote = () => {
  const router = useRouter();
  const notesState = useSelector((state) => state.notes.status);

  return (
    <motion.section
      onClick={() =>
        notesState !== "loading" && router.push("/note/create-note")
      }
      layoutId="create-note"
      layout
      className={`flex flex-col justify-center items-center p-4 h-72 w-80 ${
        notesState !== "loading" && "cursor-pointer"
      } bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl shadow-xl`}
    >
      <div className="relative flex flex-col justify-center items-center gap-3 h-full">
        <div className="absolute top-0 dark:bg-box-primary-dark">
          <h4 className="font-bold">Ciprian Stefan</h4>
        </div>

        <div className="p-3 rounded-full w-16 aspect-square shadow-lg title-color dark:bg-box-primary-dark bg-box-primary-light">
          {notesState === "idle" ? (
            <Icons.plus className="w-full h-full" />
          ) : (
            notesState === "loading" && (
              <Ring size={40} lineWeight={5} speed={2} color="currentColor" />
            )
          )}
        </div>
        <h1 className="text-lg font-semibold">
          {notesState === "idle"
            ? "Create a new Note"
            : notesState === "loading" && "Loading Notes..."}
        </h1>
      </div>
    </motion.section>
  );
};

export default AddNote;
