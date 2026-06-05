export const bookmarkTabs = ["Current Reads", "Favorite Chapters"] as const;

export type BookmarkTab = (typeof bookmarkTabs)[number];

export const bookmarkSortOptions = [
  "Novel Name",
  "Last Read",
  "Latest Release",
] as const;

export const favoriteChapterSortOptions = ["Novel Name"] as const;

export type BookmarkSort = (typeof bookmarkSortOptions)[number];

export const bookmarkEmptyMessages: Record<BookmarkTab, string> = {
  "Current Reads": "You haven't read any chapter yet!",
  "Favorite Chapters": "You haven't favorited any chapters yet!",
};
