"use client";

import * as Icons from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";

const Note = ({ params }) => {
  const id = params.id;
  const createNoteId = "create-note";

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note._id === id)
  );
  console.log(note)
  return (
    <main className="overflow-auto p-3 w-full h-full">
      <motion.div
        layoutId={id !== createNoteId ? "note" + id : createNoteId}
        className="flex flex-col p-4 gap-5 h-full w-full bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl"
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-full dark:bg-box-primary-dark bg-box-primary-light"
          >
            <Icons.chevronLeft />
          </Link>
          <motion.input
            type="text"
            className="text-2xl font-bold title-color bg-transparent outline-none px-2 rounded-xl w-96 border-2 dark:border-subtle-dark/10 border-subtle-light/10"
            placeholder="Note Title"
            defaultValue={id !== createNoteId ? note.title : ""}
          />
        </div>

        <motion.textarea
          className="whitespace-pre-line bg-transparent outline-none resize-none h-full border-2 dark:border-subtle-dark/10 border-subtle-light/10 p-3 rounded-2xl"
          placeholder="Note Content"
        >
          {id !== createNoteId ? note.content : null}
        </motion.textarea>
      </motion.div>
    </main>
  );
};

export default Note;
