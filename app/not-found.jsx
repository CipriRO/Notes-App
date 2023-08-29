const notFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
      <h1 className="title-color text-3xl font-bold">
        This page doesn&apos;t exist!
      </h1>
      <p>
        Uh oh! The page you&apos;re looking for can&apos;t be found. It may have
        been moved or deleted.
      </p>
    </div>
  );
};

export default notFound;
