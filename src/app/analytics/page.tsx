import { analytics } from "@/utils/analytics";
import { Card } from "@tremor/react";
import { FC } from "react";

interface PageProps {}

const Page = async ({}: PageProps) => {
  const pageView = await analytics.retrieveDays("pageview", 2);
  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <Card>test</Card>
      </div>
    </div>
  );
};

export default Page;
