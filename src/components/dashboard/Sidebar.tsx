"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown, Folder, Settings, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { ITEM_TYPE_ICONS } from "@/lib/icon-map";
import {
  collections,
  currentUser,
  itemTypes,
  items,
  type Collection,
} from "@/lib/mock-data";
import { useSidebar } from "@/components/dashboard/SidebarProvider";

function SidebarGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="flex w-full items-center gap-1 px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform motion-reduce:transition-none",
            !expanded && "-rotate-90"
          )}
        />
      </button>
      {expanded && <div className="flex flex-col gap-0.5">{children}</div>}
    </div>
  );
}

function SidebarLink({
  href,
  icon,
  iconColor,
  label,
  count,
  trailingIcon,
  onClick,
}: {
  href: string;
  icon: ReactNode;
  iconColor?: string;
  label: string;
  count?: number;
  trailingIcon?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      <span className="shrink-0" style={iconColor ? { color: iconColor } : undefined}>
        {icon}
      </span>
      <span className="flex-1 truncate">{label}</span>
      {trailingIcon}
      {count !== undefined && (
        <span className="shrink-0 text-xs text-sidebar-foreground/60">
          {count}
        </span>
      )}
    </Link>
  );
}

function collectionItemCount(collection: Collection) {
  return items.filter((item) => item.collectionIds.includes(collection.id))
    .length;
}

export function Sidebar() {
  const { desktopOpen, mobileOpen, closeMobile } = useSidebar();

  const favoriteCollections = collections.filter((c) => c.isFavorite);
  // Mock data is already ordered newest-first, so "recent" is simply the
  // remaining non-favorite collections in their existing order.
  const recentCollections = collections.filter((c) => !c.isFavorite);

  const userInitials = currentUser.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-x-0 top-14 bottom-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-14 bottom-0 z-50 flex w-64 -translate-x-full flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-200 motion-reduce:transition-none",
          mobileOpen && "translate-x-0",
          "md:static md:z-auto md:translate-x-0 md:overflow-hidden md:transition-[width] md:duration-200",
          desktopOpen ? "md:w-64" : "md:w-0 md:border-r-0"
        )}
      >
        <div className="flex h-full w-64 flex-col">
          <nav className="flex flex-1 flex-col gap-4 overflow-y-auto p-3">
            <SidebarGroup title="Types">
              {itemTypes.map((type) => {
                const Icon = ITEM_TYPE_ICONS[type.icon];
                const count = items.filter(
                  (item) => item.itemTypeId === type.id
                ).length;

                return (
                  <SidebarLink
                    key={type.id}
                    href={`/items/${type.slug}`}
                    icon={<Icon className="size-4" />}
                    iconColor={type.color}
                    label={type.name}
                    count={count}
                    onClick={closeMobile}
                  />
                );
              })}
            </SidebarGroup>

            <SidebarGroup title="Collections">
              {favoriteCollections.length > 0 && (
                <div className="flex flex-col gap-0.5">
                  <p className="px-2 py-1 text-[0.65rem] font-medium tracking-wide text-sidebar-foreground/50 uppercase">
                    Favorites
                  </p>
                  {favoriteCollections.map((collection) => (
                    <SidebarLink
                      key={collection.id}
                      href={`/collections/${collection.id}`}
                      icon={<Folder className="size-4" />}
                      label={collection.name}
                      count={collectionItemCount(collection)}
                      trailingIcon={
                        <Star className="size-3.5 shrink-0 fill-yellow-500 text-yellow-500" />
                      }
                      onClick={closeMobile}
                    />
                  ))}
                </div>
              )}

              {recentCollections.length > 0 && (
                <div className="flex flex-col gap-0.5">
                  <p className="px-2 py-1 text-[0.65rem] font-medium tracking-wide text-sidebar-foreground/50 uppercase">
                    All Collections
                  </p>
                  {recentCollections.map((collection) => (
                    <SidebarLink
                      key={collection.id}
                      href={`/collections/${collection.id}`}
                      icon={<Folder className="size-4" />}
                      label={collection.name}
                      count={collectionItemCount(collection)}
                      onClick={closeMobile}
                    />
                  ))}
                </div>
              )}
            </SidebarGroup>
          </nav>

          <Link
            href="/settings"
            onClick={closeMobile}
            className="flex items-center gap-2 border-t border-sidebar-border p-3 hover:bg-sidebar-accent"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-primary text-xs font-medium text-sidebar-primary-foreground">
              {userInitials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-sidebar-foreground">
                {currentUser.name}
              </span>
              <span className="block truncate text-xs text-sidebar-foreground/60">
                {currentUser.email}
              </span>
            </span>
            <Settings className="size-4 shrink-0 text-sidebar-foreground/60" />
          </Link>
        </div>
      </aside>
    </>
  );
}
