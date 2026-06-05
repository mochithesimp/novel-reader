import { ThumbsUp } from "lucide-react";

import type { Ebook } from "../../types/ebook";

interface Props {
  ebook: Ebook;
}

const formatPrice = (price: number) =>
  price.toLocaleString("en-US", { style: "currency", currency: "USD" });

const EbookCard = ({ ebook }: Props) => (
  <article className="flex gap-5 rounded-xl border border-ww-card-border bg-ww-panel p-5 shadow-sm transition hover:border-ww-card-hover-border md:gap-6 md:p-6">
    <div className="relative h-[180px] w-[120px] shrink-0 overflow-hidden rounded-md bg-ww-surface sm:h-[200px] sm:w-[132px]">
      <img
        src={ebook.cover}
        alt={ebook.title}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://picsum.photos/seed/${ebook.slug}/264/400`;
        }}
      />
    </div>

    <div className="flex min-w-0 flex-1 flex-col">
      <h2 className="text-lg font-bold leading-snug text-ww-text-bright md:text-xl">
        {ebook.title}
      </h2>

      <p className="mt-3 text-sm">
        <span className="text-ww-text-dim">Author: </span>
        <span className="font-semibold text-ww-text-bright">{ebook.author}</span>
      </p>

      <p className="mt-1 text-sm">
        <span className="text-ww-text-dim">Translator: </span>
        <span className="font-semibold text-ww-text-bright">{ebook.translator}</span>
      </p>

      <div className="mt-3">
        {ebook.rating ? (
          <>
            <p className="text-sm font-semibold text-emerald-500">{ebook.rating.label}</p>
            <div className="mt-1 flex flex-wrap items-center gap-1.5 text-sm text-ww-text-bright">
              <ThumbsUp size={14} className="text-ww-text-bright" />
              <span className="font-semibold">{ebook.rating.percent}%</span>
              <a
                href="#"
                className="text-ww-text-dim underline transition hover:text-ww-accent"
              >
                {ebook.rating.reviewCount}{" "}
                {ebook.rating.reviewCount === 1 ? "review" : "reviews"}
              </a>
            </div>
          </>
        ) : (
          <p className="text-sm text-ww-text-dim">
            Not yet rated{" "}
            <a href="#" className="underline transition hover:text-ww-accent">
              Leave a review
            </a>
          </p>
        )}
      </div>

      <button
        type="button"
        className="mt-auto w-full rounded-full bg-ww-accent py-3 text-sm font-bold text-white transition hover:brightness-110 md:mt-5"
      >
        Buy Now {formatPrice(ebook.price)}
      </button>
    </div>
  </article>
);

export default EbookCard;
