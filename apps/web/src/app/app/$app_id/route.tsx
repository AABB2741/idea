import { createFileRoute, Outlet } from "@tanstack/react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";

import Tree from "@/components/comp-567";

export const Route = createFileRoute("/app/$app_id")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <Tree />
        </SidebarContent>
      </Sidebar>
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
