import { Link } from "react-router-dom";
import { Clock, ThumbsUp } from "lucide-react";

import { CoverIconPill, StatusBadge } from "../common/CoverOverlays";
import type { RelatedNovelItem } from "../../types/novel";

interface Props {
  novels: RelatedNovelItem[];
}

const NovelRelatedNovels = ({ novels }: Props) => (
  <section className="novel-related-novels border-t border-ww-border py-10">
    <div className="ww-container">
      <h2 className="text-xl font-bold text-ww-text-bright">Related Novels</h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {novels.map((novel) => (
          <Link
            key={novel.id}
            to={`/novel/${novel.id}`}
            className="group block"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-ww-surface">
              <img
                src={novel.cover}
                alt={novel.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${novel.slug}/300/450`;
                }}
              />
              <StatusBadge status={novel.status} />
              {novel.badge && (
                <span className="absolute right-2 top-2 rounded bg-ww-accent px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {novel.badge}
                </span>
              )}
              <CoverIconPill>
                <Clock size={12} />
              </CoverIconPill>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-ww-text-bright">
              <ThumbsUp size={12} className="text-ww-accent" />
              <span>{novel.approval}%</span>
            </div>
            <p className="mt-1 line-clamp-2 text-sm font-medium text-ww-text-bright group-hover:text-ww-accent">
              {novel.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NovelRelatedNovels;
