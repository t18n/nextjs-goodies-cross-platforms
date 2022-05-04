import React, { useEffect } from "react";
import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import i18n from "i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const router = useRouter();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return (
    <PageLayout title="i18n">
      <h1>
        NextJS is freaking <mark>{t("awesome")}</mark>.
      </h1>

      <div>
        <Link href="/i18n" locale="en">
          <a>English</a>
        </Link>
      </div>
      <div>
        <Link href="/i18n" locale="da">
          <a>Danish</a>
        </Link>
      </div>
      <div>
        <Link href="/i18n" locale="vi">
          <a>Vietnamese</a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Home;
