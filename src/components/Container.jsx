"use client";

import Head from "next/head";

const Container = ({ title, description, favicon, children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <Head>
        <title>{title || "Tribal Closet"}</title>
        <meta
          name="description"
          content={description || "One stop show for african prints"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      {children}
    </div>
  );
};

export default Container;
