import { DashboardMain } from "@/components/dashboard/DashboardMain";
import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/components/dashboard/SidebarProvider";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-dvh flex-col">
        <DashboardTopBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <DashboardMain />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
