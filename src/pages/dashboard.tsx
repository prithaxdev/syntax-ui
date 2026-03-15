import { Outlet } from "react-router-dom";
import { AppLayout } from "@/components/blocks/dashboard-shell-01/app-layout";

export default function Dashboard() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
