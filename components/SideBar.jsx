
const list = [0, 1, 2, 3, 4];

const SideBar = () => {

  return (
    <div className="dark:bg-box-secondary-dark bg-box-secondary-light h-[100svh] w-96 p-4 flex flex-col items-center gap-6">
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

      <div className="flex flex-col gap-2 max-w-full">
        <h3 className="title-color font-semibold text-lg mb-2">
          Notes History
        </h3>

        <div className="flex flex-col overflow-auto items-center gap-2 bg-box-primary-light dark:bg-box-primary-dark p-3 rounded-xl">
          <h3 className="font-semibold self-start title-color">Today</h3>

          <div className="flex flex-col max-w-full">
            {list.map((index) => (
              <div key={index} className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <p className="overflow-hidden truncate">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum quos ratione commodi quidem rerum necessitatibus illo
                    repellat illum officiis excepturi animi voluptas adipisci
                    architecto saepe reiciendis, accusamus inventore harum
                    culpa.
                  </p>
                  <p className="subtle-color font-semibold text-sm">13:03</p>
                </div>
                {list.length - 1 !== index && (
                  <span className="w-full h-[2px] my-1 dark:bg-divider-dark bg-divider-light rounded-lg" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 bg-box-primary-light dark:bg-box-primary-dark p-3 rounded-xl">
          <h3 className="font-semibold text-lg self-start title-color">
            Yesterday
          </h3>
        </div>

        <div className="flex flex-col items-center gap-2 bg-box-primary-light dark:bg-box-primary-dark p-3 rounded-xl">
          <h3 className="font-semibold text-lg self-start title-color">
            Previous 7 days
          </h3>
        </div>

        <div className="flex flex-col items-center gap-2 bg-box-primary-light dark:bg-box-primary-dark p-3 rounded-xl">
          <h3 className="font-semibold text-lg self-start title-color">
            Older Notes
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
