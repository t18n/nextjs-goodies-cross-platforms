import { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { timeApiURL } from "../../constants/urls";

export default function CSRPage() {
  const [datetimeString, setdatetimeString] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(timeApiURL);
      const data = await response.json();
      setIsLoading(false);

      setdatetimeString(data.datetime);
    })();
  }, []);

  return (
    <PageLayout title="Time now with Client Side Rendering">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <span>
          Time now:{" "}
          {datetimeString && new Date(datetimeString).toLocaleTimeString()}
        </span>
      )}
    </PageLayout>
  );
}
