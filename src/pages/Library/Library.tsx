import { useState } from "react";

import BookmarksContent from "../../components/bookmarks/BookmarksContent";
import BookmarksTabs from "../../components/bookmarks/BookmarksTabs";
import BookmarksToolbar, {
  type BookmarkView,
} from "../../components/bookmarks/BookmarksToolbar";
import {
  bookmarkEmptyMessages,
  type BookmarkSort,
  type BookmarkTab,
} from "../../constants/bookmarksData";

const Library = () => {
  const [activeTab, setActiveTab] = useState<BookmarkTab>("Current Reads");
  const [view, setView] = useState<BookmarkView>("grid");
  const [sort, setSort] = useState<BookmarkSort>("Last Read");

  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] flex-col bg-ww-list-bg sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-72px)]">
      <div className="ww-container w-full py-8 pb-16">
        <h1 className="text-3xl font-bold text-ww-text-bright md:text-4xl">
          Bookmarks
        </h1>

        <BookmarksTabs
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setSort(tab === "Favorite Chapters" ? "Novel Name" : "Last Read");
          }}
        />

        <BookmarksToolbar
          activeTab={activeTab}
          view={view}
          sort={sort}
          onViewChange={setView}
          onSortChange={setSort}
        />

        <BookmarksContent
          activeTab={activeTab}
          view={view}
          emptyMessage={bookmarkEmptyMessages[activeTab]}
        />
      </div>
    </section>
  );
};

export default Library;
