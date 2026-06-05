import type { NovelSubscriptionTier } from "../../types/novel";

interface Props {
  tiers: NovelSubscriptionTier[];
}

const NovelSubscriptionTiers = ({ tiers }: Props) => (
  <section className="mt-10 border-t border-ww-border pt-10">
    <h2 className="text-xl font-bold text-ww-text-bright">
      Popular Subscription Tiers
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {tiers.map((tier) => (
        <article
          key={tier.id}
          className="flex flex-col overflow-hidden rounded-xl bg-ww-panel"
        >
          <div className="p-5 text-center">
            <p className="text-sm font-semibold text-ww-text-bright">
              {tier.label}
            </p>
            <p className="mt-2 text-lg font-bold text-ww-accent">{tier.price}</p>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-ww-accent px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              SUBSCRIBE
            </button>
          </div>
          <div className="border-t border-ww-border px-5 py-4">
            <p className="font-semibold text-ww-text-bright">{tier.tierName}</p>
            <p className="mt-1 text-sm text-ww-text-dim">{tier.description}</p>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-6 text-center">
      <a href="#" className="text-sm text-ww-accent hover:underline">
        See all Tiers
      </a>
    </p>
  </section>
);

export default NovelSubscriptionTiers;
