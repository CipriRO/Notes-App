import Image from "next/image";

import plus from "@/public/icons/plus.svg";

export default function Home() {
  return (
    <main className="overflow-auto p-3 w-full">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_19rem))] gap-3">
        <div className="flex flex-col justify-center items-center p-4 gap-3 h-72 bg-box-primary-light dark:bg-box-primary-dark rounded-2xl">
          <div className="p-3 rounded-full bg-subtle-dark">
            <Image src={plus} width={40} height={40} alt="Add a note icon" />
          </div>
          <h1 className="text-lg font-semibold">Create a new Note</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-4 h-72 bg-box-primary-light dark:bg-box-primary-dark rounded-2xl">
          <div className="flex flex-col overflow-hidden gap-3">
            <h1 className="text-lg font-bold title-color">Lorem, ipsum.</h1>
            <p className="hyphens-auto text-ellipsis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              repellendus, error sint fugit rerum alias reiciendis? Velit iste,
              aspernatur facilis iure hic ducimus laborum distinctio aliquam
              voluptates reiciendis. Excepturi, nemo. Mollitia a, velit enim
              numquam provident, quasi fugit, dolorum incidunt sint animi
              architecto laboriosam eius quia rem necessitatibus voluptatibus
              cupiditate ab exercitationem praesentium! Iusto nisi laboriosam
              quis iure iste optio.
            </p>
          </div>

          <div className="flex justify-between items-center w-full subtle-color font-semibold text-sm">
            <h3 className="text-success">Synced</h3>
            <p>Today, 13:03</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-4 h-72 bg-box-primary-light dark:bg-box-primary-dark rounded-2xl">
          <div className="flex flex-col overflow-hidden gap-3">
            <h1 className="text-lg font-bold title-color">Lorem, ipsum.</h1>
            <p className="hyphens-auto text-ellipsis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              repellendus, error sint fugit rerum alias reiciendis? Velit iste,
              aspernatur facilis iure hic ducimus laborum distinctio aliquam
              voluptates reiciendis. Excepturi, nemo. Mollitia a, velit enim
              numquam provident, quasi fugit, dolorum incidunt sint animi
              architecto laboriosam eius quia rem necessitatibus voluptatibus
              cupiditate ab exercitationem praesentium! Iusto nisi laboriosam
              quis iure iste optio.
            </p>
          </div>

          <div className="flex justify-between items-center w-full subtle-color font-semibold text-sm">
            <h3 className="text-error">Not Synced</h3>
            <p>Today, 13:03</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 p-4 h-72 bg-box-primary-light dark:bg-box-primary-dark rounded-2xl">
          <div className="flex flex-col overflow-hidden gap-3">
            <h1 className="text-lg font-bold title-color">Lorem, ipsum.</h1>
            <p className="hyphens-auto text-ellipsis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              repellendus, error sint fugit rerum alias reiciendis? Velit iste,
              aspernatur facilis iure hic ducimus laborum distinctio aliquam
              voluptates reiciendis. Excepturi, nemo. Mollitia a, velit enim
              numquam provident, quasi fugit, dolorum incidunt sint animi
              architecto laboriosam eius quia rem necessitatibus voluptatibus
              cupiditate ab exercitationem praesentium! Iusto nisi laboriosam
              quis iure iste optio.
            </p>
          </div>

          <div className="flex justify-between items-center w-full subtle-color font-semibold text-sm">
            <h3 className="dark:text-subtle-dark text-subtle-light">Syncing...</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
