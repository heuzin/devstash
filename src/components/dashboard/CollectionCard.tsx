import Link from "next/link";
import { Star } from "lucide-react";

import { ITEM_TYPE_ICONS } from "@/lib/icon-map";
import { itemTypes, items, type Collection } from "@/lib/mock-data";

/** The distinct item types represented in a collection, in first-seen order. */
function collectionTypeBreakdown(collection: Collection) {
  const typeIds = items
    .filter((item) => item.collectionIds.includes(collection.id))
    .map((item) => item.itemTypeId);

  const uniqueTypeIds = [...new Set(typeIds)];
  return uniqueTypeIds
    .map((typeId) => itemTypes.find((type) => type.id === typeId))
    .filter((type) => type !== undefined);
}

export function CollectionCard({ collection }: { collection: Collection }) {
  const itemCount = items.filter((item) =>
    item.collectionIds.includes(collection.id)
  ).length;
  const typeBreakdown = collectionTypeBreakdown(collection);

  return (
    <Link
      href={`/collections/${collection.id}`}
      className="flex flex-col gap-2 rounded-lg border border-border border-l-2 bg-card p-4 transition-colors hover:bg-muted/50"
      style={{ borderLeftColor: collection.color }}
    >
      <div className="flex items-center gap-1.5">
        <h3 className="truncate font-medium">{collection.name}</h3>
        {collection.isFavorite && (
          <Star className="size-3.5 shrink-0 fill-yellow-500 text-yellow-500" />
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        {itemCount} {itemCount === 1 ? "item" : "items"}
      </p>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {collection.description}
      </p>
      <div className="mt-1 flex items-center gap-1.5">
        {typeBreakdown.map((type) => {
          const Icon = ITEM_TYPE_ICONS[type.icon];
          return <Icon key={type.id} className="size-4" style={{ color: type.color }} />;
        })}
      </div>
    </Link>
  );
}
