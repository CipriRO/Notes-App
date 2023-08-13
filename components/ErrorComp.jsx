"use client";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { CircleX } from "./Icons";
import { closeError } from "@/redux/features/notes-slice";

const ErrorComp = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.notes.error);

  const handleClickButton = () => {
    dispatch(closeError());
  };

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="absolute bottom-5 right-5 py-2 px-4 min-w-[15rem] flex gap-2 items-center dark:bg-box-secondary-dark/60 bg-box-primary-light/60 rounded-2xl shadow-md"
        >
          <div className="flex flex-col">
            <h1 className="text-error font-bold text-lg">Error</h1>
            <p>{error}</p>
          </div>

          <button
            onClick={() => handleClickButton()}
            className="hover:opacity-50 transition-opacity"
          >
            <CircleX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorComp;
