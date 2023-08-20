"use client";

import * as Icons from "@/components/Icons";
import NoteButtons from "@/components/NoteButtons";
import { createNote, saveNote } from "@/redux/features/notes-slice";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Note = ({ params }) => {
  const id = params.id;
  const createNoteId = "create-note";
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note._id === id)
  );
  const [title, setTitle] = useState(id !== createNoteId ? note.title : "");
  const [content, setContent] = useState(
    id !== createNoteId ? note.content : ""
  );
  const prevTitle = id !== createNoteId ? note.title : "";
  const prevContent = id !== createNoteId ? note.content : "";

  const [save, setSave] = useState(false);
  const [create, setcreate] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const HandlecreateNote = () => {
    if (create) {
      const data = { title, content };
      dispatch(createNote(data));
      router.push("/");
    }
  };

  const HandleSaveNote = () => {
    if (save) {
      const data = { _id: note._id, title, content };
      dispatch(saveNote(data));
      router.push("/");
    }
  };

  useEffect(() => {
    (prevTitle !== title || prevContent !== content) && title && content
      ? setSave(true)
      : setSave(false);

    title && content ? setcreate(true) : setcreate(false);
  }, [title, content, prevTitle, prevContent]);

  return (
    <main className="overflow-auto p-3 w-full h-full">
      <motion.div
        layoutId={id !== createNoteId ? "note" + id : createNoteId}
        className="flex flex-col p-4 gap-5 h-full w-full bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl"
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-full dark:bg-box-primary-dark bg-box-primary-light"
            >
              <Icons.chevronLeft />
            </Link>
            <motion.input
              type="text"
              className="placeholder:opacity-50 text-2xl font-bold title-color bg-transparent outline-none px-2 py-1 rounded-xl w-96 border-2 dark:border-subtle-dark/10 border-subtle-light/10"
              placeholder="your beautiful title.."
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <NoteButtons
            create={HandlecreateNote}
            save={HandleSaveNote}
            note={note}
            saveAvb={save}
            createAvb={create}
          />
        </div>

        <motion.textarea
          className="placeholder:opacity-50 whitespace-pre-line bg-transparent outline-none resize-none h-full border-2 dark:border-subtle-dark/10 border-subtle-light/10 p-3 rounded-2xl"
          placeholder="what's in your mind? ;)"
          onChange={(e) => setContent(e.target.value)}
          defaultValue={content}
        ></motion.textarea>
      </motion.div>
    </main>
  );
};

export default Note;
