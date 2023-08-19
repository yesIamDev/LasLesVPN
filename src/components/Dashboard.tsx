import React, { FunctionComponent } from "react";
import TransactionChart from "./transactionChart";
import BuyerProfileCharts from "./BuyerProfilCharts";

import DashboardStatsGrid from "./DashboardStatsGrid";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
            <TransactionChart />
            <BuyerProfileCharts />
        </div>
    </div>
  );
};

export default Dashboard;
