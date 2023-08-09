"use client";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import NoteButtons from "./NoteButtons";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const NotesList = () => {
  const notes = useSelector((state) => state.notesReducer);
  const router = useRouter();

  const handleClick = (e, id) => {
    if (!e.target.closest(".buttons-component")) {
      router.push(`/note/${id}`);
    }
  };

  return (
    <>
      {notes.map((note) => (
        <motion.div
          onClick={(e) => handleClick(e, note.id)}
          layout
          layoutId={"note" + note.id}
          key={note.id}
          className="flex flex-col justify-between items-center overflow-hidden cursor-pointer gap-3 p-4 max-h-72 flex-1 basis-64 shadow-xl bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl"
        >
          <motion.div layout className="flex flex-col overflow-hidden gap-3">
            <div className="flex justify-between">
              <motion.h1 className="text-lg font-bold title-color">{note.title}</motion.h1>
              <NoteButtons note={note} />
            </div>

            <motion.p className="hyphens-auto text-ellipsis">{note.content}</motion.p>
          </motion.div>

          <motion.div
            layout
            className="flex justify-between items-center w-full subtle-color font-semibold text-sm"
          >
            <h3
              className={
                note.status === "neutral"
                  ? "dark:text-subtle-dark text-subtle-light"
                  : note.status
                  ? "text-success"
                  : "text-error"
              }
            >
              {note.statusText}
            </h3>
            <p>{note.dateAndTime}</p>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default NotesList;
