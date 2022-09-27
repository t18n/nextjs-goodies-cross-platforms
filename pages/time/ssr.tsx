import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { timeApiURL } from "../../constants/urls";

type ISRPageProps = {
  datetimeString: string;
};

export default function SSRPage({ datetimeString }: ISRPageProps) {
  return (
    <PageLayout title="Time now with Server Side Rendering">
      <div>
        Time now:{" "}
        {datetimeString && new Date(datetimeString).toLocaleTimeString()}
      </div>
    </PageLayout>
  );
}

/**
 * Note:There may be some gliches between SSG and Tauri
 * https://tauri.app/v1/guides/getting-started/setup/next-js#nextjs-in-ssg-mode
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(timeApiURL);
  const data = await response.json();

  console.log(">>> SSR getServerSideProps", data);

  return {
    props: { datetimeString: data.datetime },
  };
};
