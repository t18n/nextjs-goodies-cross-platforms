import { useRouter } from "next/router";
import { PageLayout } from "../../../components/PageLayout";

const Welcome = () => {
  const router = useRouter();
  const { tz } = router.query;

  return (
    <PageLayout title="Dynamic nested page">
      <div>
        Welcome to <b>{tz}</b>
      </div>
    </PageLayout>
  );
};

export default Welcome;
