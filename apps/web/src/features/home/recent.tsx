import { Clock9 } from "lucide-react";

import { Section } from "./section";

export function Recent() {
  return (
    <Section
      icon={Clock9}
      title="Recentemente visitado"
      containerClassName="space-x-4 whitespace-nowrap"
      overflowGradient
    >
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
      <RecentCard />
    </Section>
  );
}

function RecentCard() {
  return (
    <a
      href="#"
      className="bg-card before:bg-accent relative inline-block overflow-hidden rounded-xl p-4 before:absolute before:top-0 before:right-0 before:left-0 before:h-[40%]"
    >
      <div className="relative z-10 space-y-2">
        <h1 className="text-4xl">📚️</h1>
        <p className="text-xs">Estudos</p>
      </div>
    </a>
  );
}
