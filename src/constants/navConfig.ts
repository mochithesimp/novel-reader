export type NavItem =
  | { label: string; path: string }
  | { label: string; hasDropdown: true };

export const resourceDropdownItems = [
  { label: "Ebooks", path: "/ebooks" },
  { label: "Webnovel Handbook", href: "#" },
] as const;

export const navLinks: NavItem[] = [
  { label: "Series", path: "/series" },
  { label: "Bookmarks", path: "/library" },
  { label: "Forum", path: "#" },
  { label: "Merch", path: "#" },
  { label: "Resources", hasDropdown: true },
];
