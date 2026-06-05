import { useState } from "react";
import { Clock, Medal, ThumbsUp } from "lucide-react";

import { CoverIconPill, StatusBadge } from "../common/CoverOverlays";
import CarouselControls from "../common/CarouselControls";
import SectionHeading from "../common/SectionHeading";
import { topSeriesByGenre } from "../../constants/homeData";

const TopSeriesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="ww-container pb-10">
      <SectionHeading
        title="First, The Top Series"
        subtitle="Let's read top stories by genre!"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {topSeriesByGenre.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl px-4 pb-5 pt-4 text-center shadow-lg"
            style={{ background: item.gradient }}
          >
            <h3 className="text-base font-extrabold text-white drop-shadow-sm">
              {item.genre}
            </h3>

            <div className="mx-auto mt-3 max-w-[130px]">
              <div className="relative aspect-[2/3] overflow-hidden rounded-md shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
                <img
                  src={item.novel.cover}
                  alt={item.novel.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${item.novel.slug}/300/450`;
                  }}
                />
                <StatusBadge status={item.novel.status} />
                <CoverIconPill>
                  <Clock size={12} />
                </CoverIconPill>
              </div>
            </div>

            <h4 className="mt-4 text-base font-extrabold leading-snug text-neutral-900">
              {item.novel.title}
            </h4>

            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-neutral-600">
              <ThumbsUp size={12} className="text-ww-accent" />
              <span>{item.novel.approval}%</span>
              {item.medal && (
                <Medal
                  size={14}
                  className={
                    item.medal === "gold" ? "text-yellow-500" : "text-ww-accent"
                  }
                />
              )}
            </div>

            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
              {item.novel.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <CarouselControls
          total={3}
          active={active}
          onPrev={() => setActive((i) => (i - 1 + 3) % 3)}
          onNext={() => setActive((i) => (i + 1) % 3)}
        />
      </div>
    </section>
  );
};

export default TopSeriesSection;
