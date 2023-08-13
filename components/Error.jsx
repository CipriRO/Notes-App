"use client";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.notes.error);

  return (
    <>
      {/* {error && ( */}
        <div className="absolute flex flex-col dark:bg-box-secondary-dark/60 bg-box-primary-light/60">
          <h1 className="text-error">Error</h1>
          <p>{error}</p>
        </div>
      {/* )} */}
    </>
  );
};

export default Error;
