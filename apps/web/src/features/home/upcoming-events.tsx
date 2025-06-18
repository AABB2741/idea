import { CalendarDays } from "lucide-react";

import dayjs from "@/lib/dayjs";
import { cn } from "@/lib/utils";

import { Section } from "./section";

export function UpcomingEvents() {
  return (
    <Section icon={CalendarDays} title="Próximos eventos">
      <div className="bg-card rounded-xl">
        <table className="border-separate border-spacing-4">
          <tbody>
            <EventRow date={dayjs().toDate()} events={[]} />
            <EventRow
              date={dayjs().add(1, "days").toDate()}
              events={[
                { name: "Prova USF", durationType: "full_day" },
                {
                  name: "Weekly",
                  durationType: "hour",
                  description: "7 – 8 AM ⸱ Google Meet Code xxx-xxxx-xxx",
                },
              ]}
            />
            <EventRow date={dayjs().add(2, "days").toDate()} events={[]} />
            <EventRow date={dayjs().add(3, "days").toDate()} events={[]} />
            <EventRow date={dayjs().add(4, "days").toDate()} events={[]} />
            <EventRow date={dayjs().add(5, "days").toDate()} events={[]} />
          </tbody>
        </table>
      </div>
    </Section>
  );
}

interface Event {
  name: string;
  description?: string;
  durationType: "full_day" | "hour";
}

interface EventRowProps {
  date: Date;
  events: Event[];
}

function EventRow({ date, events }: EventRowProps) {
  const isToday = dayjs().startOf("date").isSame(dayjs(date).startOf("date"));

  return (
    <tr>
      <td
        className={cn(
          "text-muted-foreground flex py-1 text-xs",
          isToday && "text-destructive"
        )}
      >
        <span>
          {isToday && "Hoje,"} {dayjs(date).format("D [de] MMMM")}
        </span>
      </td>
      <td className="space-y-2">
        {events.length === 0 && (
          <div className="text-muted-foreground border-border border-l-4 px-4 py-1 text-xs">
            Sem mais eventos
          </div>
        )}
        {events.map((event, index) => (
          <div className="flex items-center gap-2" key={index}>
            {event.durationType === "full_day" && (
              <>
                <div className="bg-destructive size-2 rounded-full" />
                <p className="text-sm">{event.name}</p>
              </>
            )}
            {event.durationType === "hour" && (
              <>
                <div className="w-1 self-stretch rounded-full border border-dashed border-purple-500" />
                <div className="space-y-1">
                  <p className="text-sm">{event.name}</p>
                  {!!event.description && (
                    <p className="text-muted-foreground text-xs">
                      {event.description}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </td>
    </tr>
  );
}
