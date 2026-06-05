import { useState } from "react";
import { Clock, ThumbsUp } from "lucide-react";

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
            className="overflow-hidden rounded-xl shadow-lg"
            style={{ background: item.gradient }}
          >
            <div className="px-4 pb-2 pt-4">
              <h3 className="text-lg font-extrabold text-ww-text-bright">{item.genre}</h3>
            </div>

            <div className="mx-4 mb-3">
              <div className="relative aspect-[2/3] overflow-hidden rounded-md shadow-md">
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

            <div className="bg-white/90 px-4 pb-4 pt-2 text-neutral-900">
              <h4 className="line-clamp-2 text-sm font-extrabold">{item.novel.title}</h4>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1">
                  <ThumbsUp size={12} />
                  {item.novel.approval}%
                </span>
                <span
                  className={`h-4 w-4 rounded-full ${
                    item.medal === "gold" ? "bg-yellow-500" : "bg-ww-accent"
                  }`}
                />
              </div>
              <p className="mt-2 line-clamp-3 text-xs text-gray-600">
                {item.novel.description}
              </p>
            </div>
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
