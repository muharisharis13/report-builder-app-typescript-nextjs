import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = (props: { children: any; title: string }) => {
  const { children, title } = props;
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
      </section>
      <section
        className={`${
          router.pathname === "/" ||
          router.pathname === "/builder/builder" ||
          router.pathname === "/userManagement" ||
          router.pathname === "/profile"
            ? null
            : "ml-24"
        }`}
        style={{ marginTop: "74px", paddingTop: "20px" }}
      >
        {children}
      </section>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "",
};
