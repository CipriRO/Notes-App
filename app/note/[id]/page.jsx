"use client";

import { useDispatch, useSelector } from "react-redux";
import useSessionRedirect from "@/hooks/useSessionRedirect";
import Loading from "@/components/Loading";
import NoteInputs from "@/components/NoteInputs";
import { fetchNote } from "@/redux/features/notes-slice";

const Note = ({ params }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSessionRedirect();

  const id = params.id;
  const createNoteId = "create-note";
  const createMode = id === createNoteId;

  const note = useSelector((state) =>
    state.notes.notes.find((note) => note?._id === id)
  );

  if (!createMode && !note && !isLoading) {
    dispatch(fetchNote({ _id: id }));
  }
  
  return (
    <>
      {!isLoading && (note || createMode) ? (
        <NoteInputs id={id} note={note} createMode={createMode} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Note;
