import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Kalam } from "next/font/google";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ session, Component, pageProps, description }) {
  const pathName = useRouter().pathname.split("/");

  console.log(session, "LOGIN ");
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <>
          <div className={kalam.className}>
            <Layout
              title={`Tribal Closet || ${
                pathName[1] === "" ? "Store" : pathName[1].toUpperCase()
              }`}
              description={description}
            >
              <Component {...pageProps} />;
            </Layout>
          </div>
        </>
      </SessionProvider>
    </Provider>
  );
}
