import { GetStaticProps } from "next";
import { PageLayout } from "../../components/PageLayout";
import { timeApiURL } from "../../constants/urls";

type ISRPageProps = {
  datetimeString: string;
};

const revalidateTime = 5;

export default function ISRPage({ datetimeString }: ISRPageProps) {
  return (
    <PageLayout
      title={`Time now with Incremental Static Regeneration every ${revalidateTime}s`}
    >
      <div>
        Time now:{" "}
        {datetimeString && new Date(datetimeString).toLocaleTimeString()}
      </div>
    </PageLayout>
  );
}

/**
 * Must be tested with production build
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(timeApiURL);
  const data = await response.json();

  console.log(`>>> ISR ${revalidateTime} getStaticProps`, data);

  return {
    props: { datetimeString: data.datetime },
    revalidate: revalidateTime, // attempt to re-generate the page at most every revalidateTime seconds
  };
};
