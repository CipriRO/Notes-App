"use client";

import { motion } from "framer-motion";
import NoteButtons from "./NoteButtons";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "@/redux/features/notes-slice";
import { useSession } from "next-auth/react";

const NotesList = () => {
  const dispatch = useDispatch();
  const notesStatus = useSelector((state) => state.notes.status);
  const fetchStatus = useSelector((state) => state.notes.fetched);
  const notes = useSelector((state) => state.notes.notes);
  const { data: session } = useSession();

  useEffect(() => {
    !fetchStatus &&
      session &&
      notesStatus === "idle" &&
      !notes.length &&
      dispatch(fetchNotes({ email: session.user.email }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, session]);

  const router = useRouter();

  const handleClick = (e, _id) => {
    if (!e.target.closest(".buttons-component")) {
      router.push(`/note/${_id}`);
    }
  };

  return (
    <>
      {notes.map((note) => (
        <motion.section
          onClick={(e) => handleClick(e, note._id)}
          layout
          layoutId={"note" + note._id}
          key={note._id}
          className="flex flex-col justify-between items-center overflow-hidden cursor-pointer gap-3 p-4 max-h-72 w-80 shadow-xl bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl"
        >
          <motion.div
            layout
            className="flex flex-col overflow-hidden gap-3 w-full"
          >
            <div className="flex justify-between items-center">
              <motion.h1 className="text-xl font-bold title-color max-w-full overflow-hidden truncate">
                {note.title}
              </motion.h1>
              <NoteButtons note={note} />
            </div>

            <motion.p className="hyphens-auto">
              {note.content}
            </motion.p>
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
            {/* <p>{note.dateAndTime}</p> */}
          </motion.div>
        </motion.section>
      ))}
    </>
  );
};

export default NotesList;
