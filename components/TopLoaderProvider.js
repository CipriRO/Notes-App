"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const LoaderProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        color="#ffffffe6"
        options={{ showSpinner: false }}
      />
    </>
  );
};

export default LoaderProvider;