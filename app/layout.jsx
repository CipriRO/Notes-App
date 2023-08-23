import "/styles/globals.css";
import { ReduxProvider } from "@/redux/provider";
import ErrorComp from "@/components/ErrorComp";
import LoaderProvider from "@/components/TopLoaderProvider";
import NextAuthProvider from "@/components/NextAuthProvider";

export const metadata = {
  title: "Notes App",
  description: "Manage your notes!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex h-[100svh]">
        <LoaderProvider>
          <NextAuthProvider>
            <ReduxProvider>
              <ErrorComp />
              {children}
            </ReduxProvider>
          </NextAuthProvider>
        </LoaderProvider>
      </body>
    </html>
  );
};

export default RootLayout;
