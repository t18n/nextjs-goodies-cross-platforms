import Link from "next/link";
import { useRouter } from "next/router";
import { PageLayout } from "../../components/PageLayout";

const TimezoneCph = () => {
  const router = useRouter();
  const { weather } = router.query;

  return (
    <PageLayout title="Dynamic page">
      <div>Cool, you are in Copenhagen!</div>
      <div>
        Btw, how is the weather today? Try{" "}
        <Link href="/tz/copenhagen?weather=cold">
          <a>/tz/copenhagen?weather=cold</a>
        </Link>
      </div>
      {weather && (
        <div>
          Yes, CPH weather <b>{weather}</b>
        </div>
      )}
    </PageLayout>
  );
};

export default TimezoneCph;
