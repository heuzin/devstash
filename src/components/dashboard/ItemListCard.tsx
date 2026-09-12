import Link from "next/link";
import { Pin, Star } from "lucide-react";

import { formatShortDate } from "@/lib/date";
import { ITEM_TYPE_ICONS } from "@/lib/icon-map";
import { itemTypes, type Item } from "@/lib/mock-data";

export function ItemListCard({ item }: { item: Item }) {
  const itemType = itemTypes.find((type) => type.id === item.itemTypeId);
  if (!itemType) return null;

  const Icon = ITEM_TYPE_ICONS[itemType.icon];

  return (
    <Link
      href={`/items/${itemType.slug}?item=${item.id}`}
      className="flex items-start gap-3 rounded-lg border border-border border-l-2 bg-card p-4 transition-colors hover:bg-muted/50"
      style={{ borderLeftColor: itemType.color }}
    >
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${itemType.color}1a` }}
      >
        <Icon className="size-4.5" style={{ color: itemType.color }} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate font-medium">{item.title}</h3>
          {item.isPinned && (
            <Pin className="size-3.5 shrink-0 text-muted-foreground" />
          )}
          {item.isFavorite && (
            <Star className="size-3.5 shrink-0 fill-yellow-500 text-yellow-500" />
          )}
        </div>
        <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <span className="shrink-0 text-xs text-muted-foreground">
        {formatShortDate(item.createdAt)}
      </span>
    </Link>
  );
}
