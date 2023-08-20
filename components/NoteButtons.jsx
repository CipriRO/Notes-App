"use client";

import * as Icons from "@/components/Icons";

import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { deleteNotes } from "@/redux/features/notes-slice";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

const NoteButtons = ({ note, create, save, saveAvb, createAvb }) => {
  const router = useRouter();
  const pathname = usePathname();
  const saveBtn =
    pathname.startsWith("/note/") && pathname !== "/note/create-note";
  const createBtn = pathname === "/note/create-note";
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(deleteNotes({ id }));
  };

  return (
    <motion.div className="flex gap-2 justify-center items-center buttons-component">
      {createBtn && (
        <button
          onClick={() => create()}
          title="Upload the Note"
          className={`rounded-full p-2 dark:bg-box-primary-dark bg-box-primary-light ${
            !createAvb && "opacity-10 cursor-default"
          }`}
        >
          <Icons.cloudUpload />
        </button>
      )}

      {saveBtn && (
        <button
          onClick={() => save()}
          title="Save the Note"
          className={`rounded-full p-2 dark:bg-box-primary-dark bg-box-primary-light ${
            !saveAvb && "opacity-10 cursor-default"
          }`}
        >
          <Icons.save />
        </button>
      )}

      {!createBtn && (
        <button
          title="Delete the Note"
          onClick={() => {
            deleteNote(note._id);
            saveBtn && router.push("/");
          }}
          className="rounded-full p-2 text-error dark:bg-box-primary-dark bg-box-primary-light"
        >
          <Icons.trash />
        </button>
      )}
    </motion.div>
  );
};

export default NoteButtons;
