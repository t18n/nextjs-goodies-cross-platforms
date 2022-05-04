import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { trackPageChange } from "../utils/tracking";
import { NavBar } from "./Nav";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    trackPageChange(router.route, title);
  }, [router.route, title]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar withLogin={router.route !== "/dashboard"} />

      <h1>{title}</h1>

      {children}
    </div>
  );
};
