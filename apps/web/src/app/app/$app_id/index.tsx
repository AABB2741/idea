import { createFileRoute } from "@tanstack/react-router";

import { Recent } from "@/features/home/recent";
import { UpcomingEvents } from "@/features/home/upcoming-events";

export const Route = createFileRoute("/app/$app_id/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-xl space-y-6 py-6">
      <h1 className="text-center text-lg font-bold">Boa noite, AaBbb2741</h1>

      <Recent />
      <UpcomingEvents />
    </div>
  );
}
