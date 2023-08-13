"use client";
import * as Icons from "@/components/Icons";

import NotesList from "@/components/NotesList";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="overflow-auto p-3 w-full">
      <motion.div layout layoutRoot className="flex flex-wrap gap-3">
        <motion.div
          onClick={() => router.push('/note/create-note')}
          layoutId="create-note"
          className="flex flex-col justify-center items-center p-4 gap-3 h-72 w-80 cursor-pointer bg-box-secondary-light dark:bg-box-secondary-dark rounded-2xl shadow-xl"
        >
          <div className="p-3 rounded-full w-16 aspect-square shadow-lg title-color dark:bg-box-primary-dark bg-box-primary-light">
            <Icons.plus className="w-full h-full" />
          </div>
          <h1 className="text-lg font-semibold">Create a new Note</h1>
        </motion.div>

        <NotesList />
      </motion.div>
    </main>
  );
}
