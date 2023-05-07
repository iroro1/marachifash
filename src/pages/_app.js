import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Indie_Flower, Kalam, Yanone_Kaffeesatz } from "next/font/google";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const indie_Flower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});
const tribalMainFont = Yanone_Kaffeesatz({
  subsets: ["latin"],
  weight: ["400"],
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps, title, description }) {
  const pathName = useRouter().pathname.split("/");
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
