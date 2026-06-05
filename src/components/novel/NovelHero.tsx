import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Clock, Medal, ThumbsUp } from "lucide-react";

import type { NovelDetail } from "../../types/novel";

interface Props {
  detail: NovelDetail;
}

const NovelHero = ({ detail }: Props) => {
  const [synopsisExpanded, setSynopsisExpanded] = useState(false);

  return (
    <section className="bg-ww-bg">
      <div className="ww-container py-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          <div className="mx-auto w-full max-w-[220px] shrink-0 md:mx-0 md:max-w-[260px]">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-ww-surface shadow-lg">
              <img
                src={detail.cover}
                alt={detail.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${detail.slug}/520/780`;
                }}
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            {detail.status && (
              <span className="inline-block rounded bg-ww-panel px-2 py-0.5 text-xs font-semibold text-ww-text-bright">
                {detail.status}
              </span>
            )}

            <h1 className="mt-3 text-2xl font-extrabold text-ww-text-bright md:text-4xl">
              {detail.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-ww-text-bright">
                <ThumbsUp size={14} className="text-ww-accent" />
                {detail.approval}%
              </span>
              <Medal size={16} className="text-ww-accent" />
              <a href="#reviews" className="text-ww-accent hover:underline">
                {detail.reviewCount} Reviews &gt;
              </a>
            </div>

            <p className="mt-4 text-sm text-ww-text-dim">
              <span className="text-ww-text-bright">Author:</span> {detail.author}
            </p>
            <p className="mt-1 text-sm text-ww-text-dim">
              <span className="text-ww-text-bright">Translator:</span>{" "}
              {detail.translator}
            </p>

            <p
              className={`mt-4 text-sm leading-relaxed text-ww-text ${
                synopsisExpanded ? "" : "line-clamp-3"
              }`}
            >
              {detail.shortSynopsis}
            </p>
            <button
              type="button"
              onClick={() => setSynopsisExpanded((v) => !v)}
              className="mt-1 inline-flex items-center gap-1 text-sm text-ww-accent hover:underline"
            >
              {synopsisExpanded ? "Show less" : "Show more"}
              <ChevronDown
                size={14}
                className={`transition ${synopsisExpanded ? "rotate-180" : ""}`}
              />
            </button>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-lg bg-ww-panel px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-ww-text-bright">
                <Clock size={16} className="text-ww-accent" />
                {detail.freeChaptersLabel}
              </div>
              <span className="font-mono text-sm text-ww-text-bright">
                {detail.freeChaptersCountdown}
              </span>
            </div>

            <Link
              to={`/chapter/1`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-ww-accent px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:brightness-110 md:w-auto md:min-w-[200px]"
            >
              START READING
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovelHero;
