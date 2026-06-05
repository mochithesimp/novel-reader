import NovelDetailTabs, { type NovelDetailTab } from "./NovelDetailTabs";
import type { NovelDetail } from "../../types/novel";

interface Props {
  detail: NovelDetail;
  activeTab: NovelDetailTab;
  onTabChange: (tab: NovelDetailTab) => void;
}

const NovelMetaSection = ({ detail, activeTab, onTabChange }: Props) => {
  const showMetaInfo = activeTab === "About";

  return (
    <section>
      <div
        className={`ww-container pt-6 ${showMetaInfo ? "pb-0" : "pb-4"}`}
      >
        <NovelDetailTabs activeTab={activeTab} onTabChange={onTabChange} />

        {showMetaInfo && (
          <>
            <div className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
              <div>
                <p className="text-xs text-ww-text-dim">Chapters</p>
                <p className="mt-1 text-base font-semibold text-ww-text-bright md:text-lg">
                  {detail.chapterCount} Chapters
                </p>
              </div>
              <div>
                <p className="text-xs text-ww-text-bright">Licensed From</p>
                <p className="mt-1 text-base font-semibold text-ww-text-bright md:text-lg">
                  {detail.licensedFrom}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pb-6">
              {detail.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-ww-panel px-3 py-1.5 text-sm font-medium text-ww-text-bright md:text-base"
                >
                  {genre}
                </span>
              ))}
              {detail.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-ww-panel px-3 py-1.5 text-sm font-medium text-ww-text-bright md:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="border-b border-ww-border" />
          </>
        )}
      </div>
    </section>
  );
};

export default NovelMetaSection;
