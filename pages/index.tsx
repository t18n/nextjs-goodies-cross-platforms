import React from "react";
import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout title="Home">
      <h2>
        NextJS is freaking <mark>{t("awesome")}</mark>. Don&apos;t believe me?
      </h2>

      <h2>Login to see more.</h2>
    </PageLayout>
  );
};

export default Home;
