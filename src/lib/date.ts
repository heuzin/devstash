/** Formats an ISO date string ("2026-01-15") as a short display date ("Jan 15"). */
export function formatShortDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
