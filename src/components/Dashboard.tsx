import React, { FunctionComponent } from "react";

import DashboardStatsGrid from "./DashboardStatsGrid";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="flex gap-4">
        <DashboardStatsGrid />
    </div>
  );
};

export default Dashboard;
