import SideBar from "@/components/SideBar";
import "/styles/globals.css";
import { ReduxProvider } from "@/redux/provider";
import ErrorComp from "@/components/ErrorComp";
import LoaderProvider from "@/components/TopLoaderProvider";

export const metadata = {
  title: "Notes App",
  description: "Manage your notes!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex h-[100svh]">
        <LoaderProvider>
          <ReduxProvider>
            <ErrorComp />
            <SideBar />
            {children}
          </ReduxProvider>
        </LoaderProvider>
      </body>
    </html>
  );
};

export default RootLayout;
