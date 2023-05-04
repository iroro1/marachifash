import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Layout from "@/components/Layout";
import { Kalam, Indie_Flower, Yanone_Kaffeesatz } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useRouter } from "next/router";

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

  // console.log(app);
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
