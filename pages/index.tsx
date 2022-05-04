import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title="Login">
      <h2>NextJS is freaking awesome. Don&apos;t believe me? </h2>

      <h2>Login to see more.</h2>
    </PageLayout>
  );
};

export default Home;
