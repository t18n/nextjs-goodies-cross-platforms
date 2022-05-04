import { useRouter } from "next/router";
import { PageLayout } from "../../components/PageLayout";

const Timezone = () => {
  const router = useRouter();
  const { tz } = router.query;

  return (
    <PageLayout title="Dynamic page">
      <div>
        Found <b>{Array.isArray(tz) && tz.join(", ")}</b>, I am confulsed 🤔
      </div>
    </PageLayout>
  );
};

export default Timezone;
