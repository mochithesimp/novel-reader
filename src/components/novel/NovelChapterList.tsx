import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, History } from "lucide-react";

import type { NovelChapterEntry, NovelChapterTabData } from "../../types/novel";
import { useClickOutside } from "../../hooks/useClickOutside";

interface Props {
  chapterTab: NovelChapterTabData;
}

const ChapterEntry = ({ chapter }: { chapter: NovelChapterEntry }) => (
  <Link
    to={`/chapter/${chapter.id}`}
    className="block rounded-lg p-3"
  >
    <p className="text-sm font-bold leading-snug text-ww-text-bright md:text-base">
      {chapter.title}
    </p>
    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ww-text-dim">
      <span>{chapter.date}</span>
      {chapter.karmaCost !== undefined && (
        <>
          <span className="h-1 w-1 rounded-full bg-ww-text-dim" />
          <span className="inline-flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-white">
              K
            </span>
            {chapter.karmaCost}
          </span>
        </>
      )}
    </div>
  </Link>
);

const NovelChapterList = ({ chapterTab }: Props) => {
  const [sort, setSort] = useState(chapterTab.sortOptions[0]);
  const [sortOpen, setSortOpen] = useState(false);
  const [expandedVolumes, setExpandedVolumes] = useState<Set<number>>(
    () => new Set([2]),
  );
  const sortRef = useRef<HTMLDivElement>(null);

  useClickOutside(sortRef, () => setSortOpen(false));

  const toggleVolume = (volumeId: number) => {
    setExpandedVolumes((prev) => {
      const next = new Set(prev);
      if (next.has(volumeId)) {
        next.delete(volumeId);
      } else {
        next.add(volumeId);
      }
      return next;
    });
  };

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs text-ww-text-dim">Latest Chapter</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <p className="text-base font-semibold text-ww-text-bright md:text-lg">
              {chapterTab.latestChapter}
            </p>
            <span className="h-1 w-1 rounded-full bg-ww-accent" />
            <p className="text-sm text-ww-text-dim">{chapterTab.updatedAgo}</p>
          </div>
        </div>

        <div ref={sortRef} className="relative min-w-[120px]">
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
              {chapterTab.sortOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      setSort(option);
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
      </div>

      <div className="mt-6 space-y-3">
        {chapterTab.volumes.map((volume) => {
          const isExpanded = expandedVolumes.has(volume.id);

          return (
            <div
              key={volume.id}
              className="overflow-hidden rounded-lg bg-ww-panel"
            >
              <button
                type="button"
                onClick={() => toggleVolume(volume.id)}
                className="flex w-full items-center gap-3 px-4 py-4 text-left"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-ww-panel-muted text-sm font-semibold text-ww-text-bright">
                  {volume.chapterCount}
                </span>
                <span className="flex-1 text-base font-semibold text-ww-text-bright">
                  {volume.title}
                </span>
                {isExpanded ? (
                  <ChevronUp
                    size={18}
                    className="shrink-0 text-ww-accent"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-ww-text-dim"
                  />
                )}
              </button>

              {isExpanded && volume.chapters.length > 0 && (
                <div className="border-t border-ww-border px-2 py-2 md:px-4 md:py-4">
                  {volume.chapters.length === 2 ? (
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
                      <ChapterEntry chapter={volume.chapters[0]} />
                      <div className="hidden justify-center md:flex">
                        <History size={18} className="text-ww-text-dim" />
                      </div>
                      <ChapterEntry chapter={volume.chapters[1]} />
                    </div>
                  ) : (
                    <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                      {volume.chapters.map((chapter) => (
                        <ChapterEntry key={chapter.id} chapter={chapter} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NovelChapterList;
