import Link from "next/link";
import { useRouter } from "next/router";
import { PageLayout } from "../../components/PageLayout";

const Timezone = () => {
  const router = useRouter();
  const { tz } = router.query;

  return (
    <PageLayout title="Dynamic page">
      <div>
        Info for timezone: <b>{tz}</b> from route parameter
      </div>

      <div>
        Try to go to{" "}
        <Link href={`/tz/${tz}?tz=random_tz`}>
          <a>
            /tz/<b>{tz}</b>?tz=random_tz
          </a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Timezone;
