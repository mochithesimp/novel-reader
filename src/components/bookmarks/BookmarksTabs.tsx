import type { BookmarkTab } from "../../constants/bookmarksData";

interface Props {
  activeTab: BookmarkTab;
  onTabChange: (tab: BookmarkTab) => void;
}

const BookmarksTabs = ({ activeTab, onTabChange }: Props) => (
  <div className="mt-6 border-b border-ww-border">
    <div className="flex gap-8">
      {(["Current Reads", "Favorite Chapters"] as const).map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`relative pb-3 text-sm transition ${
              isActive
                ? "font-semibold text-ww-text-bright"
                : "font-normal text-ww-text-dim hover:text-ww-text-bright"
            }`}
          >
            {tab}
            {isActive && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-ww-accent" />
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default BookmarksTabs;
