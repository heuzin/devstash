import { Layers, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Top bar for the dashboard: brand, search, and the new item action.
 * Display only for now — no search or item creation behavior yet.
 */
export function DashboardTopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border px-4">
      <div className="flex shrink-0 items-center gap-2 font-semibold">
        <Layers className="size-5 text-primary" />
        DevStash
      </div>

      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search items…" className="pl-8" />
      </div>

      <Button className="ml-auto shrink-0">
        <Plus />
        New Item
      </Button>
    </header>
  );
}
