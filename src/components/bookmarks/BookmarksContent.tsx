import type { BookmarkTab } from "../../constants/bookmarksData";
import type { BookmarkView } from "./BookmarksToolbar";

interface Props {
  activeTab: BookmarkTab;
  view: BookmarkView;
  emptyMessage: string;
}

const BookmarksContent = ({ activeTab, view, emptyMessage }: Props) => {
  if (activeTab === "Favorite Chapters" || view === "grid") {
    return (
      <p className="mt-8 text-sm text-ww-text-dim">{emptyMessage}</p>
    );
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-[minmax(0,1fr)_160px_180px] items-center gap-4 border-b border-ww-border pb-3 text-sm font-bold text-ww-text-bright">
        <span>Title</span>
        <span>Last Read</span>
        <span>Latest Release</span>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_160px_180px] gap-4 pt-4">
        <p className="text-sm text-ww-text-dim">{emptyMessage}</p>
        <span />
        <span />
      </div>
    </div>
  );
};

export default BookmarksContent;
