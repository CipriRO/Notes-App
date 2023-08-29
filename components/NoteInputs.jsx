"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "@/components/Icons";
import NoteButtons from "./NoteButtons";
import { useRouter } from "next-nprogress-bar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { createNote, saveNote } from "@/redux/features/notes-slice";
import { useDispatch } from "react-redux";

const NoteInputs = ({ id, note, createMode }) => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const [title, setTitle] = useState(!createMode ? note?.title : "");
  const [content, setContent] = useState(
    !createMode ? note?.content : ""
  );
  const prevTitle = !createMode ? note?.title : "";
  const prevContent = !createMode ? note?.content : "";

  const [save, setSave] = useState(false);
  const [create, setcreate] = useState(false);

  //functions that handle saving or creating notes
  const HandleCreateNote = () => {
    if (create) {
      const data = { title, content, user: session.user.email };
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

  //useEffect that handles the current state of the note
  //if you can save/create a note or not
  useEffect(() => {
    (prevTitle !== title || prevContent !== content) && title && content
      ? setSave(true)
      : setSave(false);

    title && content ? setcreate(true) : setcreate(false);
  }, [title, content, prevTitle, prevContent]);

  return (
    <motion.main
      layoutId={!createMode ? "note" + id : 'createNote'}
      className="flex flex-col p-4 gap-5 w-full h-full shadow-md bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl"
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-full shadow dark:bg-box-primary-dark bg-box-primary-light"
          >
            <Icons.chevronLeft />
          </Link>
          <motion.input
            type="text"
            className="placeholder:dark:opacity-50 text-2xl font-bold title-color bg-transparent outline-none px-2 py-1 rounded-xl w-96 border-2 dark:border-subtle-dark/10 border-subtle-light/50"
            placeholder="your beautiful title.."
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <NoteButtons
          create={HandleCreateNote}
          save={HandleSaveNote}
          note={note}
          saveAvb={save}
          createAvb={create}
        />
      </div>

      <motion.textarea
        className="placeholder:dark:opacity-50 whitespace-pre-line bg-transparent outline-none resize-none h-full border-2 dark:border-subtle-dark/10 border-subtle-light/50 p-3 rounded-2xl"
        placeholder="what's in your mind? ;)"
        onChange={(e) => setContent(e.target.value)}
        defaultValue={content}
      ></motion.textarea>
    </motion.main>
  );
};

export default NoteInputs;
