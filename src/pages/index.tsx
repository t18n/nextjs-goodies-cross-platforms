import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { useTranslation } from "react-i18next";
import { invoke } from '@tauri-apps/api/tauri';

const isClient = typeof window !== 'undefined';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [tauriSaid, setTauriSaid] = useState<string>('');

  useEffect(() => {
    invoke('greet', { name: 'World' })
      .then((response) => setTauriSaid(response as string));
  }, []);

  return (
    <PageLayout title="Home">
      <h2>
        NextJS is freaking <mark>{t("awesome")}</mark>. Don&apos;t believe me?
      </h2>

      <b>Tauri said: {tauriSaid}</b>

      <h2>Login to see more.</h2>
    </PageLayout>
  );
};

export default Home;
