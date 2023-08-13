import SideBar from "@/components/SideBar";
import "/styles/globals.css";
import { ReduxProvider } from "@/redux/provider";
import ErrorComp from "@/components/ErrorComp";

export const metadata = {
  title: "Notes App",
  description: "Manage your notes!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex h-[100svh]">
        <ReduxProvider>
          <ErrorComp />
          <SideBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
