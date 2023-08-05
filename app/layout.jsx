import SideBar from "@/components/SideBar";
import "/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes App",
  description: "Manage your notes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-[100svh]">
        <SideBar />
        {children}
      </body>
    </html>
  );
}
