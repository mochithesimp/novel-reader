import { Link } from "react-router-dom";
import { Clock, ThumbsUp } from "lucide-react";

import { CoverIconPill, StatusBadgeSm } from "../common/CoverOverlays";
import type { SeriesItem } from "../../types/novel";

interface Props {
  series: SeriesItem;
  onGenreClick?: (genre: string) => void;
}

const SeriesListCard = ({ series, onGenreClick }: Props) => (
  <div className="group flex gap-5 rounded-xl border border-ww-card-border p-4 transition hover:border-ww-card-hover-border hover:bg-ww-panel/40">
    <Link
      to={`/novel/${series.id}`}
      className="relative h-[168px] w-[112px] shrink-0 overflow-hidden rounded-md bg-ww-surface sm:h-[180px] sm:w-[120px]"
    >
      <img
        src={series.cover}
        alt={series.title}
        className="h-full w-full object-cover transition group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://picsum.photos/seed/${series.slug}/240/360`;
        }}
      />
      <StatusBadgeSm status={series.status} />
      <CoverIconPill className="bottom-1.5 right-1.5">
        <Clock size={12} />
      </CoverIconPill>
    </Link>

    <div className="flex min-w-0 flex-1 flex-col py-1">
      <Link
        to={`/novel/${series.id}`}
        className="text-lg font-bold text-ww-text-bright transition group-hover:text-ww-accent sm:text-xl"
      >
        {series.title}
      </Link>

      <div className="mt-1 flex items-center gap-1 text-sm text-ww-text">
        <ThumbsUp size={14} className="text-ww-accent" />
        <span>{series.approval}%</span>
      </div>

      <Link
        to={`/novel/${series.id}`}
        className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-ww-text-dim"
      >
        {series.description}
      </Link>

      <div className="mt-3 flex flex-wrap gap-2">
        {series.genres.map((genre) => (
          <button
            key={genre}
            type="button"
            onClick={() => onGenreClick?.(genre)}
            className="rounded-md border border-ww-card-border bg-ww-chip px-2.5 py-1 text-xs text-ww-text-bright transition hover:bg-ww-chip-hover hover:text-ww-accent"
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default SeriesListCard;
