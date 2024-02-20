"use client";

import { Card } from "@tremor/react";

interface AnalyticsDashboardProps {}

const AnalyticsDashboard = ({}: AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="w-full mx-auto max-w-xs">
          <p className=""></p>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
