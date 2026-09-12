import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
}

/** A single KPI tile for the dashboard stats row. */
export function StatsCard({ label, value, icon: Icon }: StatsCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
        <Icon className="size-4.5 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-semibold">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
