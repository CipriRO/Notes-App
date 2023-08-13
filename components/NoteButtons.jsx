"use client";

import * as Icons from "@/components/Icons";

import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { deleteNotes } from "@/redux/features/notes-slice";

const NoteButtons = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch(deleteNotes({ id }));
  };

  return (
    <motion.div className="flex gap-2 justify-center items-center buttons-component">
      <button
        title="Sync the Note with the Database"
        className={`rounded-full p-2 dark:bg-box-primary-dark bg-box-primary-light title-color ${
          note.status && "opacity-50 cursor-default"
        }`}
      >
        <Icons.sync />
      </button>

      <button
        title="Delete the Note"
        onClick={() => deleteNote(note._id)}
        className="rounded-full p-2 text-error dark:bg-box-primary-dark bg-box-primary-light"
      >
        <Icons.trash />
      </button>
    </motion.div>
  );
};

export default NoteButtons;
