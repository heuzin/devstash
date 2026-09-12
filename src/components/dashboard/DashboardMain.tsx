import Link from "next/link";
import { Folder, Layers, Pin, Star } from "lucide-react";

import { StatsCard } from "@/components/dashboard/StatsCard";
import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { ItemListCard } from "@/components/dashboard/ItemListCard";
import { collections, items } from "@/lib/mock-data";

const RECENT_ITEMS_LIMIT = 10;

export function DashboardMain() {
  const stats = {
    items: items.length,
    collections: collections.length,
    favoriteItems: items.filter((item) => item.isFavorite).length,
    favoriteCollections: collections.filter((c) => c.isFavorite).length,
  };

  const pinnedItems = items.filter((item) => item.isPinned);

  // Exclude items already shown in Pinned so nothing is duplicated on the page.
  const recentItems = items
    .filter((item) => !item.isPinned)
    .sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, RECENT_ITEMS_LIMIT);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Your developer knowledge hub</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatsCard label="Items" value={stats.items} icon={Layers} />
        <StatsCard label="Collections" value={stats.collections} icon={Folder} />
        <StatsCard label="Favorite items" value={stats.favoriteItems} icon={Star} />
        <StatsCard
          label="Favorite collections"
          value={stats.favoriteCollections}
          icon={Star}
        />
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Collections</h2>
          <Link
            href="/collections"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      {pinnedItems.length > 0 && (
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5">
            <Pin className="size-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Pinned</h2>
          </div>
          <div className="flex flex-col gap-3">
            {pinnedItems.map((item) => (
              <ItemListCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Recent Items</h2>
        <div className="flex flex-col gap-3">
          {recentItems.map((item) => (
            <ItemListCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
