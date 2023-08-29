"use client";

const Error = ({ reset }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full w-full">
      <div className="flex flex-col items-center gap-2">
        <h1 className="title-color text-3xl font-bold">
          Something went wrong!
        </h1>
        <p>Oops! It looks like something didn&apos;t work as expected.</p>
      </div>

      <button
        className="rounded-md py-1 px-4 border-2 shadow-md border-subtle-light dark:border-subtle-dark font-semibold hover:opacity-80 transition-opacity"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
