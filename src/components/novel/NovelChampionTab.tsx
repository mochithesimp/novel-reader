import { Plus } from "lucide-react";

import type { ChampionTabData, NovelDetail } from "../../types/novel";
import NovelRelatedNovels from "./NovelRelatedNovels";

interface Props {
  detail: NovelDetail;
}

const AccessCard = ({
  card,
}: {
  card: ChampionTabData["accessCards"][number];
}) => (
  <article className="w-full min-w-[200px] overflow-hidden rounded-xl bg-ww-panel shadow-md md:w-[220px]">
    <div
      className="px-4 py-2.5 text-center text-sm font-bold tracking-wide text-white"
      style={{ background: card.headerGradient }}
    >
      {card.header}
    </div>
    <div className="px-4 py-8 text-center">
      <p className="text-3xl font-extrabold text-ww-text-bright md:text-4xl">
        {card.value}
      </p>
      <p className="mt-2 text-sm text-ww-text-dim">{card.label}</p>
    </div>
  </article>
);

const ChampionAccessCards = ({
  accessCards,
}: {
  accessCards: ChampionTabData["accessCards"];
}) => (
  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
    <AccessCard card={accessCards[0]} />
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900">
      <Plus size={18} strokeWidth={3} />
    </span>
    <AccessCard card={accessCards[1]} />
  </div>
);

const NovelChampionTab = ({ detail }: Props) => {
  const { championTab } = detail;
  const lastRowTiers = championTab.tiers.slice(6);
  const gridTiers = championTab.tiers.slice(0, 6);

  return (
    <>
    <div className="ww-container pb-16 pt-8">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-ww-text-dim">
          ✦ CHAMPIONS ✦
        </p>
        <h2 className="mt-4 text-2xl font-extrabold text-ww-text-bright md:text-3xl">
          {championTab.headline}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-ww-text-dim md:text-base">
          {championTab.subtitle}
        </p>
        <p className="mt-4 text-lg font-semibold text-ww-accent md:text-xl">
          {championTab.tagline}
        </p>
      </div>

      <div className="mt-10">
        <ChampionAccessCards accessCards={championTab.accessCards} />
      </div>

      <section className="mt-14">
        <h3 className="text-center text-xl font-bold text-ww-text-bright md:text-2xl">
          Choose Champion Tiers
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gridTiers.map((tier) => (
            <article
              key={tier.id}
              className="rounded-xl bg-ww-panel p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ww-text-bright">
                    {tier.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-ww-accent">
                    {tier.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-ww-accent px-4 py-2 text-xs font-bold text-white"
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="mt-4 font-semibold text-ww-text-bright">
                {tier.tierName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ww-text-dim">
                {tier.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-3xl gap-4 md:grid-cols-2">
          {lastRowTiers.map((tier) => (
            <article
              key={tier.id}
              className="rounded-xl bg-ww-panel p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ww-text-bright">
                    {tier.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-ww-accent">
                    {tier.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-ww-accent px-4 py-2 text-xs font-bold text-white"
                >
                  SUBSCRIBE
                </button>
              </div>
              <p className="mt-4 font-semibold text-ww-text-bright">
                {tier.tierName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ww-text-dim">
                {tier.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>

    <NovelRelatedNovels novels={detail.relatedNovels} />
    </>
  );
};

export default NovelChampionTab;
