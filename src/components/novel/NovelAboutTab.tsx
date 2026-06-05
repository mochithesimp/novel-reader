import type { NovelDetail } from "../../types/novel";
import NovelRelatedNovels from "./NovelRelatedNovels";
import NovelReviewSection from "./NovelReviewSection";
import NovelSubscriptionTiers from "./NovelSubscriptionTiers";

interface Props {
  detail: NovelDetail;
}

const NovelAboutTab = ({ detail }: Props) => (
  <>
  <div className="ww-container pb-16 pt-8">
    <section>
      <h2 className="text-xl font-bold text-ww-text-bright">Details</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ww-text">
        {detail.fullSynopsis.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>

    <section className="mt-10 border-t border-ww-border pt-10">
      <div className="space-y-4 text-sm leading-relaxed text-ww-text">
        {detail.translatorNote.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>

    <NovelReviewSection detail={detail} />

    <section className="mt-10 border-t border-ww-border pt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-ww-text-bright">
          Translator&apos;s Notice
        </h2>
        <a href="#" className="text-sm text-ww-accent hover:underline">
          View All
        </a>
      </div>
      <p className="mt-4 text-sm text-ww-text-dim">
        No announcements yet! Keep watching this space for latest announcements.
      </p>
    </section>

    <NovelSubscriptionTiers tiers={detail.subscriptionTiers} />
  </div>

  <NovelRelatedNovels novels={detail.relatedNovels} />
  </>
);

export default NovelAboutTab;
