import { useState } from "react";
import { Medal, ThumbsUp } from "lucide-react";

import CarouselControls from "../common/CarouselControls";
import { announcements, featuredSlides } from "../../constants/homeData";

const FEATURED_DOTS = 8;
const CONTENT_HEIGHT = "h-[260px] md:h-[300px]";

const HeroSection = () => {
  const [featuredActive, setFeaturedActive] = useState(1);
  const [announcementActive, setAnnouncementActive] = useState(0);
  const slide = featuredSlides[0];

  return (
    <section className="ww-container py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Left — Featured */}
        <div className="flex w-full flex-col gap-3 lg:w-[60%]">
          <div
            className={`relative ${CONTENT_HEIGHT} w-full overflow-hidden rounded-2xl bg-ww-surface`}
          >
            <img
              src={slide.banner}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            <div className="relative flex h-full flex-col justify-end px-7 pb-6 pt-5 md:px-8 md:pb-7">
              <h1 className="text-2xl font-extrabold leading-tight text-white md:text-[28px]">
                {slide.title}
              </h1>
              <div className="mt-2 flex items-center gap-2.5 text-base text-white">
                <span className="inline-flex items-center gap-1.5">
                  <ThumbsUp size={16} className="fill-ww-accent text-ww-accent" />
                  {slide.approval}%
                </span>
                <Medal size={16} className="text-ww-accent" />
              </div>
              <p className="mt-1 text-base text-white">{slide.status}</p>
              <p className="mt-2 line-clamp-2 max-w-[90%] text-sm leading-snug text-white/70 md:text-[15px]">
                {slide.description}
              </p>
            </div>
          </div>

          <CarouselControls
            total={FEATURED_DOTS}
            active={featuredActive}
            onPrev={() =>
              setFeaturedActive((i) => (i - 1 + FEATURED_DOTS) % FEATURED_DOTS)
            }
            onNext={() => setFeaturedActive((i) => (i + 1) % FEATURED_DOTS)}
          />
        </div>

        {/* Right — Announcements */}
        <div className="flex w-full flex-col gap-3 lg:w-[40%]">
          <div className={`flex ${CONTENT_HEIGHT} w-full flex-col`}>
            <div className="flex h-7 shrink-0 items-center justify-between md:h-8">
              <h2 className="text-lg font-bold leading-none text-ww-text-bright md:text-xl">
                Announcements
              </h2>
              <a
                href="#"
                className="text-sm leading-none text-ww-text-dim hover:text-ww-accent"
              >
                View All
              </a>
            </div>

            <ul className="mt-3 flex min-h-0 flex-1 flex-col gap-2">
              {announcements.map((item) => (
                <li key={item.id} className="min-h-0 flex-1">
                  <a
                    href="#"
                    className="flex h-full items-center justify-between gap-4 rounded-xl bg-ww-chip px-4 transition hover:bg-ww-chip-hover md:px-6"
                  >
                    <span className="line-clamp-1 text-sm text-ww-text-bright md:text-[15px]">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-xs text-ww-text-dim md:text-[13px]">
                      {item.timeAgo}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <CarouselControls
            total={2}
            active={announcementActive}
            onPrev={() => setAnnouncementActive((i) => (i - 1 + 2) % 2)}
            onNext={() => setAnnouncementActive((i) => (i + 1) % 2)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
