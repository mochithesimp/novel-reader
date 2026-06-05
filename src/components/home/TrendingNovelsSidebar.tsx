import { useState } from "react";
import { Link } from "react-router-dom";
import { ThumbsUp } from "lucide-react";

import {
  trendingNovelsSidebar,
  trendingSidebarTabs,
} from "../../constants/homeData";

const TrendingNovelsSidebar = () => {
  const [activeTab, setActiveTab] = useState<string>("Fantasy");

  return (
    <aside className="w-full shrink-0 lg:w-[300px] xl:w-[320px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-ww-text-bright md:text-xl">
          Trending Novels
        </h2>
        <a
          href="#"
          className="text-sm text-ww-text-dim transition hover:text-ww-accent"
        >
          View All
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {trendingSidebarTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              activeTab === tab
                ? "border-ww-accent text-ww-accent"
                : "border-ww-border text-ww-text-dim hover:border-ww-card-hover-border hover:text-ww-text-bright"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul className="mt-4 divide-y divide-ww-border/50">
        {trendingNovelsSidebar.map((novel) => (
          <li key={novel.id}>
            <Link
              to={`/novel/${novel.id}`}
              className="flex gap-3 py-4 transition hover:opacity-90"
            >
              <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded bg-ww-surface">
                <img
                  src={novel.cover}
                  alt={novel.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${novel.slug}/96/128`;
                  }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-ww-accent text-[11px] font-bold text-white">
                    {novel.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-bold leading-snug text-ww-text-bright">
                      {novel.title}
                    </p>
                    <p className="mt-1 text-xs text-ww-text-dim">
                      {novel.chapterCount} Chapters available
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-ww-text-dim">
                      <ThumbsUp size={11} className="text-ww-text-dim" />
                      <span>{novel.approval}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TrendingNovelsSidebar;
