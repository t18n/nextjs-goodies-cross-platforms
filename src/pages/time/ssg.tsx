import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { timeApiURL } from "../../constants/urls";

type ISRPageProps = {
  datetimeString: string;
};

export default function SSGPage({ datetimeString }: ISRPageProps) {
  return (
    <PageLayout title="Time now with Static Site Generation">
      <div>
        Time now:{" "}
        {datetimeString && new Date(datetimeString).toLocaleTimeString()}
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(timeApiURL);
  const data = await response.json();

  console.log(">>> SSG getStaticProps", data);

  return {
    props: { datetimeString: data.datetime },
  };
};
