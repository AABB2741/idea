import type { LucideIcon } from "lucide-react";
import type React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.PropsWithChildren {
  icon: LucideIcon;
  title: string;
  overflowGradient?: boolean;
  containerClassName?: string;
}

export function Section({
  icon: Icon,
  title,
  children,
  containerClassName,
  overflowGradient = false,
}: SectionProps) {
  return (
    <section className="overflow-hidden">
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        <Icon className="size-3" />
        <p>{title}</p>
      </div>
      <div
        className={cn(
          "relative pt-4",
          overflowGradient &&
            "after:to-background after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:w-12 after:bg-linear-to-r after:from-transparent",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
