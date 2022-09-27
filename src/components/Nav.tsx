import React from "react";
import Link from "next/link";
import { nextFetchingTypes } from "../constants/fetching_types";
import styles from "./Nav.module.css";
import classnames from "classnames";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export const NavBar = ({ withLogin }: { withLogin: boolean }) => {
  const router = useRouter();

  const isLoggedin = !!Cookies.get("token");

  const navItemClassnames = (path: string) =>
    classnames(styles["nav-item"], {
      [styles["active"]]: router.pathname === path,
    });

  const navItemLoginClassnames = (path: string) =>
    classnames(styles["nav-item"], {
      [styles["active"]]: router.pathname === path,
      [styles["nav-item-login"]]: router.pathname === "/login",
    });

  return (
    <ul className={styles.nav}>
      <li className={navItemClassnames(`/`)}>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </li>

      <h4 className={styles["nav-item-header"]}>Time - Render</h4>
      {nextFetchingTypes.map((type) => (
        <li className={navItemClassnames(`/time/${type}`)} key={type}>
          <Link href={`/time/${type}`}>
            <a>{type.toUpperCase().replace(/-/g, " ")}</a>
          </Link>
        </li>
      ))}

      <h4 className={styles["nav-item-header"]}>Timezone - Pages</h4>
      <li className={navItemClassnames("/tz/just_a_random_timezone")}>
        <Link href="/tz/just_a_random_timezone">
          <a>Dynamic page</a>
        </Link>
      </li>
      <li className={navItemClassnames("/tz/just_a_random_timezone/welcome")}>
        <Link href="/tz/just_a_random_timezone/welcome">
          <a>Dynamic nested page</a>
        </Link>
      </li>
      <li
        className={navItemClassnames(
          "/tz/just_a_random_timezone/random1/ramdom2"
        )}
      >
        <Link href="/tz/just_a_random_timezone/random1/ramdom2">
          <a>Catch all page</a>
        </Link>
      </li>
      <li className={navItemClassnames(`/tz/copenhagen`)}>
        <Link href={`/tz/copenhagen`}>
          <a>Copenhagen</a>
        </Link>
      </li>

      <h4 className={styles["nav-item-header"]}>i18n</h4>
      <li className={navItemClassnames("/i18n")}>
        <Link href="/i18n">
          <a>i18n</a>
        </Link>
      </li>

      {withLogin && !isLoggedin && (
        <li className={navItemLoginClassnames(`/login`)}>
          <Link href="/login">
            <a className="login-button">Login</a>
          </Link>
        </li>
      )}
    </ul>
  );
};
