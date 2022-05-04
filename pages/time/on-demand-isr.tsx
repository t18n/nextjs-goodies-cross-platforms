import { GetStaticProps } from "next";
import { PageLayout } from "../../components/PageLayout";
import { timeApiURL } from "../../constants/urls";

type ISRPageProps = {
  datetimeString: string;
};

export default function ISRPage({ datetimeString }: ISRPageProps) {
  const revalidate = () =>
    fetch("/api/revalidate", {
      method: "POST",
      body: JSON.stringify({
        slug: "/time/on-demand-isr",
      }),
    });

  return (
    <PageLayout
      title={`Time now with On-Demand Incremental Static Regeneration`}
    >
      <div>
        Time now:{" "}
        {datetimeString && new Date(datetimeString).toLocaleTimeString()}
      </div>

      <button onClick={revalidate}>Revalidate</button>

      <hr />

      <div>TODO: Handle slug with locale</div>
    </PageLayout>
  );
}

/**
 * Must be tested with production build
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(timeApiURL);
  const data = await response.json();

  console.log(">>> On-demand ISR getStaticProps", data);

  return {
    props: { datetimeString: data.datetime },
  };
};
