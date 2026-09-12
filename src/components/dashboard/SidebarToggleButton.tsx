"use client";

import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/dashboard/SidebarProvider";

export function SidebarToggleButton() {
  const { toggle } = useSidebar();

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle sidebar"
      onClick={toggle}
    >
      <PanelLeft />
    </Button>
  );
}
