import { useState } from "react";

import CarouselControls from "../common/CarouselControls";
import { StatusBadge } from "../common/CoverOverlays";
import { fscSubscriptionSlides } from "../../constants/homeData";
import type { FscSubscriptionOffer } from "../../types/novel";

const FscBadge = () => (
  <span className="absolute right-1.5 top-1.5 flex h-7 w-7 flex-col items-center justify-center rounded bg-ww-accent text-[7px] font-black leading-none tracking-tight text-white shadow-sm">
    <span>FSC</span>
  </span>
);

const FscSubscriptionCard = ({ offer }: { offer: FscSubscriptionOffer }) => (
  <article className="fsc-subscription-card flex flex-col overflow-hidden rounded-xl bg-ww-panel">
    <h3 className="px-4 pt-4 text-center text-sm font-semibold text-ww-text-bright">
      {offer.title}
    </h3>

    <div className="flex flex-1 flex-col gap-4 p-4 sm:flex-row sm:items-stretch">
      <div className="relative mx-auto aspect-[2/3] w-[120px] shrink-0 overflow-hidden rounded-md bg-ww-surface sm:mx-0">
        <img
          src={offer.cover}
          alt={offer.title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://picsum.photos/seed/${offer.slug}/240/360`;
          }}
        />
        <StatusBadge status={offer.status} />
        <FscBadge />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h4 className="text-xl font-extrabold leading-tight text-ww-text-bright md:text-2xl">
          Subscribe to{" "}
          <span className="text-ww-accent">Full Series Champion</span>
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-ww-text-dim">
          Access <span className="font-bold text-ww-text-bright">ALL CHAPTERS</span>{" "}
          and help support authors and translators.
        </p>
        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-ww-accent px-4 py-3 text-center font-bold text-white transition hover:brightness-110"
        >
          <span className="block text-sm tracking-wide">SUBSCRIBE</span>
          <span className="mt-0.5 block text-xs font-semibold opacity-90">
            {offer.priceMonthly} / month
          </span>
        </button>
      </div>
    </div>
  </article>
);

const FscSubscriptionCarousel = () => {
  const [active, setActive] = useState(0);
  const total = fscSubscriptionSlides.length;

  return (
    <section className="ww-container pt-12 pb-10">
      <div className="grid gap-4 md:grid-cols-2">
        {fscSubscriptionSlides[active].map((offer) => (
          <FscSubscriptionCard key={offer.id} offer={offer} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <CarouselControls
          total={total}
          active={active}
          onPrev={() => setActive((i) => (i - 1 + total) % total)}
          onNext={() => setActive((i) => (i + 1) % total)}
        />
      </div>
    </section>
  );
};

export default FscSubscriptionCarousel;
