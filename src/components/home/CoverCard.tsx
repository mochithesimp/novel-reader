import { Link } from "react-router-dom";
import { Clock, ThumbsUp } from "lucide-react";

import {
  CoverIconPill,
  CoverRank,
  StatusBadge,
} from "../common/CoverOverlays";
import type { Novel } from "../../types/novel";

interface Props {
  novel: Novel;
  rank?: number;
  showMeta?: boolean;
  showTitleBelow?: boolean;
  blurred?: boolean;
}

const CoverCard = ({
  novel,
  rank,
  showMeta = false,
  showTitleBelow = false,
  blurred = false,
}: Props) => (
  <Link to={`/novel/${novel.id}`} className="group block shrink-0">
    <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-ww-surface">
      <img
        src={novel.cover}
        alt={novel.title}
        className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
          blurred ? "blur-sm" : ""
        }`}
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget;
          target.src = `https://picsum.photos/seed/${novel.slug}/300/450`;
        }}
      />
      <StatusBadge status={novel.status} />

      {rank !== undefined && <CoverRank rank={rank} />}

      <CoverIconPill>
        <Clock size={12} />
      </CoverIconPill>
    </div>

    {showMeta && (
      <div className="mt-2">
        <div className="flex items-center gap-1 text-xs text-ww-text-bright">
          <ThumbsUp size={12} className="text-ww-accent" />
          <span>{novel.approval ?? Math.round(novel.rating * 20)}%</span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm font-medium text-ww-text-bright group-hover:text-ww-accent">
          {novel.title}
        </p>
      </div>
    )}

    {showTitleBelow && !showMeta && (
      <p className="mt-2 line-clamp-2 text-sm font-medium text-ww-text-bright group-hover:text-ww-accent">
        {novel.title}
      </p>
    )}
  </Link>
);

export default CoverCard;
