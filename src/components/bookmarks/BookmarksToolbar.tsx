import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
} from "lucide-react";

import {
  bookmarkSortOptions,
  favoriteChapterSortOptions,
  type BookmarkSort,
  type BookmarkTab,
} from "../../constants/bookmarksData";
import { useClickOutside } from "../../hooks/useClickOutside";

export type BookmarkView = "grid" | "list";

interface Props {
  activeTab: BookmarkTab;
  view: BookmarkView;
  sort: BookmarkSort;
  onViewChange: (view: BookmarkView) => void;
  onSortChange: (sort: BookmarkSort) => void;
}

const BookmarksToolbar = ({
  activeTab,
  view,
  sort,
  onViewChange,
  onSortChange,
}: Props) => {
  const showViewToggle = activeTab === "Current Reads";
  const sortOptions =
    activeTab === "Favorite Chapters"
      ? favoriteChapterSortOptions
      : bookmarkSortOptions;
  const [sortOpen, setSortOpen] = useState(false);
  const [sortDescending, setSortDescending] = useState(true);
  const sortRef = useRef<HTMLDivElement>(null);

  useClickOutside(sortRef, () => setSortOpen(false));

  return (
    <div
      className={`mt-6 flex flex-wrap items-center gap-4 ${
        showViewToggle ? "justify-between" : "justify-end"
      }`}
    >
      {showViewToggle && (
        <div className="inline-flex overflow-hidden rounded-md border border-ww-border">
          <button
            type="button"
            aria-label="Grid view"
            onClick={() => onViewChange("grid")}
            className={`flex h-9 w-9 items-center justify-center transition ${
              view === "grid"
                ? "bg-ww-accent text-white"
                : "bg-transparent text-ww-text-dim hover:text-ww-text-bright"
            }`}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            type="button"
            aria-label="List view"
            onClick={() => onViewChange("list")}
            className={`flex h-9 w-9 items-center justify-center border-l border-ww-border transition ${
              view === "list"
                ? "bg-ww-accent text-white"
                : "bg-transparent text-ww-text-dim hover:text-ww-text-bright"
            }`}
          >
            <List size={16} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div ref={sortRef} className="relative min-w-[160px]">
          <button
            type="button"
            onClick={() => setSortOpen((open) => !open)}
            className={`flex h-9 w-full items-center justify-between gap-3 border bg-ww-panel px-3 text-sm font-semibold text-ww-text-bright transition ${
              sortOpen
                ? "rounded-t-md border-ww-accent"
                : "rounded-md border-ww-border hover:border-ww-card-hover-border"
            }`}
          >
            {sort}
            {sortOpen ? (
              <ChevronUp size={14} className="shrink-0 text-ww-text-bright" />
            ) : (
              <ChevronDown size={14} className="shrink-0 text-ww-text-dim" />
            )}
          </button>

          {sortOpen && (
            <ul className="absolute right-0 left-0 z-10 overflow-hidden rounded-b-md border border-t-0 border-ww-accent bg-ww-panel py-2 shadow-lg">
              {sortOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      onSortChange(option);
                      setSortOpen(false);
                    }}
                    className={`block w-full px-3 py-2 text-left text-sm transition hover:bg-ww-panel-hover ${
                      sort === option
                        ? "text-ww-text-bright"
                        : "text-ww-text-dim"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          aria-label={sortDescending ? "Sort descending" : "Sort ascending"}
          onClick={() => setSortDescending((desc) => !desc)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ww-border text-ww-text-dim transition hover:border-ww-card-hover-border hover:text-ww-text-bright"
        >
          {sortDescending ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
        </button>
      </div>
    </div>
  );
};

export default BookmarksToolbar;
