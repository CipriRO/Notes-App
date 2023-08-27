import { Ring } from "@uiball/loaders";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Ring size={60} lineWeight={5} speed={2} color="white" />
    </div>
  );
};

export default Loading;
