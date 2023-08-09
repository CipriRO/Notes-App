import SideBar from "@/components/SideBar";
import "/styles/globals.css";
import { ReduxProvider } from "@/redux/provider";

export const metadata = {
  title: "Notes App",
  description: "Manage your notes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-[100svh]">
        <ReduxProvider>
          <SideBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
