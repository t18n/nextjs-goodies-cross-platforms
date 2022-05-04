import React from "react";
import Link from "next/link";
import { nextFetchingTypes } from "../constants/fetching_types";
import styles from "./Nav.module.css";
import classnames from "classnames";
import { useRouter } from "next/router";

export const NavBar = ({ withLogin }: { withLogin: boolean }) => {
  const router = useRouter();

  const navItemClassnames = (path: string) =>
    classnames(styles["nav-item"], {
      [styles["active"]]: router.pathname === path,
    });

  return (
    <ul className={styles.nav}>
      {nextFetchingTypes.map((type) => (
        <li className={navItemClassnames(`/time/${type}`)} key={type}>
          <Link href={`/time/${type}`}>
            <a>{type.toUpperCase().replaceAll("-", " ")}</a>
          </Link>
        </li>
      ))}
      {withLogin && (
        <li className={navItemClassnames(`/login`)}>
          <Link href="/login">
            <a className="login-button">Login</a>
          </Link>
        </li>
      )}
    </ul>
  );
};
