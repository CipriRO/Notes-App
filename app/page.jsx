'use client'

import NotesList from "@/components/NotesList";
import AddNote from "@/components/AddNote";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full">
      <motion.div layout layoutRoot className="flex flex-wrap gap-3">
        <AddNote />
        <NotesList />
      </motion.div>
    </main>
  );
}
