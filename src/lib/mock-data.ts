export interface User {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  slug: string;
  icon: string; // lucide-react icon name
  color: string; // hex
  contentType: "TEXT" | "FILE" | "URL";
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  color: string; // hex, dominant item type color (drives card border/background tint)
}

export interface Item {
  id: string;
  title: string;
  description: string;
  contentType: "TEXT" | "FILE" | "URL";
  content?: string;
  url?: string;
  language?: string;
  itemTypeId: string;
  collectionIds: string[];
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string; // ISO date
}

export const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  image: null,
  isPro: true,
};

export const itemTypes: ItemType[] = [
  {
    id: "type-snippet",
    name: "Snippets",
    slug: "snippets",
    icon: "Code",
    color: "#3b82f6",
    contentType: "TEXT",
  },
  {
    id: "type-prompt",
    name: "Prompts",
    slug: "prompts",
    icon: "Sparkles",
    color: "#8b5cf6",
    contentType: "TEXT",
  },
  {
    id: "type-command",
    name: "Commands",
    slug: "commands",
    icon: "Terminal",
    color: "#f97316",
    contentType: "TEXT",
  },
  {
    id: "type-note",
    name: "Notes",
    slug: "notes",
    icon: "StickyNote",
    color: "#eab308",
    contentType: "TEXT",
  },
  {
    id: "type-link",
    name: "Links",
    slug: "links",
    icon: "Link",
    color: "#10b981",
    contentType: "URL",
  },
  {
    id: "type-file",
    name: "Files",
    slug: "files",
    icon: "File",
    color: "#6b7280",
    contentType: "FILE",
  },
  {
    id: "type-image",
    name: "Images",
    slug: "images",
    icon: "Image",
    color: "#ec4899",
    contentType: "FILE",
  },
];

export const collections: Collection[] = [
  {
    id: "collection-react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    color: "#3b82f6",
  },
  {
    id: "collection-python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    color: "#3b82f6",
  },
  {
    id: "collection-context-files",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    color: "#6b7280",
  },
  {
    id: "collection-interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    color: "#eab308",
  },
  {
    id: "collection-git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    color: "#f97316",
  },
  {
    id: "collection-ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    color: "#8b5cf6",
  },
];

export const items: Item[] = [
  {
    id: "item-use-auth-hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "TEXT",
    content: "export function useAuth() {\n  // ...\n}",
    language: "typescript",
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2026-01-15",
  },
  {
    id: "item-api-error-handling",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "TEXT",
    content: "async function fetchWithRetry(url: string) {\n  // ...\n}",
    language: "typescript",
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    tags: ["fetch", "error-handling"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2026-01-12",
  },
  {
    id: "item-git-prune-branches",
    title: "Prune merged branches",
    description: "Delete local branches already merged into main",
    contentType: "TEXT",
    content: "git branch --merged main | grep -v 'main' | xargs git branch -d",
    itemTypeId: "type-command",
    collectionIds: ["collection-git-commands"],
    tags: ["git", "cleanup"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-10",
  },
  {
    id: "item-code-review-prompt",
    title: "Code review prompt",
    description: "Prompt for a thorough, security-aware code review",
    contentType: "TEXT",
    content:
      "Review the following code for security, performance, and readability...",
    itemTypeId: "type-prompt",
    collectionIds: ["collection-ai-prompts"],
    tags: ["review", "ai"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-09",
  },
  {
    id: "item-prisma-docs",
    title: "Prisma docs",
    description: "Official Prisma ORM documentation",
    contentType: "URL",
    url: "https://www.prisma.io/docs",
    itemTypeId: "type-link",
    collectionIds: [],
    tags: ["docs", "prisma"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-08",
  },
  {
    id: "item-python-list-comprehension",
    title: "List comprehension cheatsheet",
    description: "Quick reference for Python list/dict comprehensions",
    contentType: "TEXT",
    content: "squares = [x * x for x in range(10)]",
    language: "python",
    itemTypeId: "type-snippet",
    collectionIds: ["collection-python-snippets"],
    tags: ["python"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-06",
  },
  {
    id: "item-interview-big-o",
    title: "Big O cheatsheet",
    description: "Time and space complexity of common algorithms",
    contentType: "TEXT",
    content: "Array access: O(1)\nLinear search: O(n)\n...",
    itemTypeId: "type-note",
    collectionIds: ["collection-interview-prep"],
    tags: ["algorithms", "interview"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-05",
  },
  {
    id: "item-devstash-context",
    title: "DevStash project context",
    description: "Context file summarizing the DevStash product spec",
    contentType: "FILE",
    itemTypeId: "type-file",
    collectionIds: ["collection-context-files"],
    tags: ["context", "devstash"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-04",
  },
  {
    id: "item-prompt-optimizer",
    title: "Prompt optimizer system prompt",
    description: "System prompt that rewrites prompts to be sharper",
    contentType: "TEXT",
    content:
      "You are a prompt optimizer. Rewrite the given prompt to be clearer...",
    itemTypeId: "type-prompt",
    collectionIds: ["collection-ai-prompts"],
    tags: ["prompt-engineering"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-03",
  },
  {
    id: "item-docker-prune-all",
    title: "Docker prune all",
    description: "Remove all unused containers, networks, and images",
    contentType: "TEXT",
    content: "docker system prune -a --volumes",
    itemTypeId: "type-command",
    collectionIds: ["collection-git-commands"],
    tags: ["docker"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-02",
  },
];
