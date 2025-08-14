"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "./_actions/get-dashboard";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { RecentAutomations } from "@/components/dashboard/recent-automations";

export default function Page() {
  const { data, isLoading} = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      return await getDashboard();
    },
  });


  return (
    <DashboardLayout
    stats={data}
      loading={isLoading}
    >
      <RecentAutomations/>
    </DashboardLayout>
  );
}
