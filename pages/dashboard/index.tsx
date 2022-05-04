import React, { useEffect } from "react";
import type { NextPage } from "next";
import { PageLayout } from "../../components/PageLayout";
import { MeData } from "../api/me";
import Link from "next/link";
import Cookies from "js-cookie";
import router from "next/router";

const Dashboard: NextPage = () => {
  const [me, setMe] = React.useState<MeData | null>(null);

  const onLogout = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    Cookies.set("token", "null");
    router.push("/login");
  };

  useEffect(() => {
    fetch("/api/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMe(res);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <PageLayout title="Dashboard">
      {!!me && <h1>Hello {me?.data?.name}</h1>}

      <a onClick={onLogout}>Logout</a>
    </PageLayout>
  );
};

export default Dashboard;
