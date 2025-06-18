import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/app/$app_id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar></Sidebar>
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
