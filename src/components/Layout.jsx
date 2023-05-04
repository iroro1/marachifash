"use client";

import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, description, favicon, children }) => {
  return (
    <div className="w-full ">
      <Head>
        <title>{title || "Tribal Closet"}</title>
        <meta
          name="description"
          content={description || "One stop show for african prints"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
