"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextValue {
  /** Whether the sidebar is visible on desktop (md and up). */
  desktopOpen: boolean;
  /** Whether the sidebar drawer is open on mobile. */
  mobileOpen: boolean;
  /** Toggles the sidebar for whichever viewport is currently active. */
  toggle: () => void;
  /** Closes the mobile drawer (e.g. after selecting a link or tapping the backdrop). */
  closeMobile: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

const DESKTOP_BREAKPOINT = "(min-width: 768px)";

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggle() {
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia(DESKTOP_BREAKPOINT).matches;

    if (isDesktop) {
      setDesktopOpen((open) => !open);
    } else {
      setMobileOpen((open) => !open);
    }
  }

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{ desktopOpen, mobileOpen, toggle, closeMobile }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
