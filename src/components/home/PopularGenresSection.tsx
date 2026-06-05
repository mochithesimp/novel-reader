import { useState } from "react";

import PaginationBar from "../common/PaginationBar";
import CoverCard from "./CoverCard";
import SectionHeading from "../common/SectionHeading";
import { genreTabs, popularGenresNovels, recentlyUpdated } from "../../constants/homeData";

const PopularGenresSection = () => {
  const [activeGenre, setActiveGenre] = useState<string>("Cheat Systems");
  const [updatesActive, setUpdatesActive] = useState(0);

  return (
    <section className="ww-container space-y-10 pb-10">
      <div>
        <SectionHeading title="Popular Genres" />
        <div className="mb-6 flex flex-wrap gap-2">
          {genreTabs.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setActiveGenre(genre)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeGenre === genre
                  ? "border border-ww-accent text-ww-accent"
                  : "bg-ww-surface text-ww-text-bright hover:bg-ww-elevate"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {popularGenresNovels.map((novel, index) => (
            <CoverCard key={novel.id} novel={novel} blurred={index === 0} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeading title="Most Recently Updated" />
        <div className="rounded-xl bg-ww-surface">
          <ul className="divide-y divide-ww-border/40">
            {recentlyUpdated.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="flex flex-col gap-3 px-4 py-4 transition hover:bg-ww-elevate sm:flex-row sm:items-center"
                >
                  <img
                    src={item.cover}
                    alt={item.seriesTitle}
                    className="h-12 w-12 shrink-0 rounded object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/${item.seriesTitle}/96/96`;
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ww-text-bright">
                      {item.seriesTitle}
                    </p>
                  </div>
                  <p className="min-w-0 truncate text-sm text-ww-text sm:w-48">
                    {item.chapterTitle}
                  </p>
                  <p className="text-sm text-ww-text-dim sm:w-24">{item.translator}</p>
                  <p className="text-sm text-ww-text-dim sm:w-32 sm:text-right">
                    {item.timeAgo}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <div className="px-4">
            <PaginationBar
              total={3}
              active={updatesActive}
              onPrev={() => setUpdatesActive((i) => (i - 1 + 3) % 3)}
              onNext={() => setUpdatesActive((i) => (i + 1) % 3)}
              showAllUpdatesLink
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularGenresSection;
