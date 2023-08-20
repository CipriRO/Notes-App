
const SideBar = () => {

  return (
    <div className="dark:bg-box-secondary-dark bg-box-secondary-light h-[100svh] w-[30rem] p-4 flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center title-color font-semibold">
          <h3>08 July 2023</h3>
          <h3>20:53</h3>
        </div>

        <div className="flex justify-between items-center title-color text-[min(6.5vw,_2rem)] font-bold">
          {/* <button
            type="button"
            className=""
          >
            <Image className="title-color" src={chevronLeft} alt="Left Arrow" />
          </button> */}
          <h1 className="w-full text-center">Good Afternoon</h1>
        </div>
      </div>

      
    </div>
  );
};

export default SideBar;
