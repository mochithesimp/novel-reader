import { useState } from "react";
import {
  ChevronDown,
  Medal,
  MessageCircle,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import type { NovelDetail } from "../../types/novel";

interface Props {
  detail: NovelDetail;
}

const NovelReviewSection = ({ detail }: Props) => {
  const [reviewText, setReviewText] = useState("");
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>(
    {},
  );

  const wordCount = reviewText.trim() ? reviewText.trim().split(/\s+/).length : 0;

  return (
    <section id="reviews" className="mt-10 border-t border-ww-border pt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ww-text-bright">
            <ThumbsUp size={14} className="text-ww-accent" />
            {detail.approval}%
          </span>
          <Medal size={14} className="text-ww-accent" />
          <span className="text-sm text-ww-text-dim">
            {detail.reviewCount} Reviews
          </span>
        </div>
        <a href="#" className="text-sm text-ww-accent hover:underline">
          View All
        </a>
      </div>

      <h2 className="mt-8 text-xl font-bold text-ww-text-bright">Reviews</h2>

      <div className="mt-4 rounded-xl bg-ww-panel p-6">
        <p className="text-center text-xs text-ww-text-dim">Write a review</p>
        <p className="mt-2 text-center text-lg font-bold text-ww-text-bright">
          Enjoy {detail.title}?
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ww-border text-ww-text-dim transition hover:border-ww-accent hover:text-ww-accent"
          >
            <ThumbsUp size={18} />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ww-border text-ww-text-dim transition hover:border-ww-accent hover:text-ww-accent"
          >
            <ThumbsDown size={18} />
          </button>
        </div>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Add a Review"
          rows={4}
          className="mt-4 w-full resize-none rounded-lg border border-ww-border bg-ww-surface px-4 py-3 text-sm text-ww-text-bright outline-none placeholder:text-ww-text-dim focus:border-ww-accent"
        />

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-ww-text-dim">{wordCount} Words</span>
          <button
            type="button"
            className="rounded-full bg-ww-panel-muted px-5 py-2 text-sm font-semibold text-ww-text-dim transition hover:bg-ww-panel-hover hover:text-ww-text-bright"
          >
            Submit
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-ww-text-dim">
          By submitting this review I confirm I have read and accepted the{" "}
          <a href="#" className="text-ww-accent hover:underline">
            review policy
          </a>
          .
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {detail.reviews.map((review) => {
          const expanded = expandedReviews[review.id];

          return (
            <article
              key={review.id}
              className="rounded-xl bg-ww-panel p-5"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-ww-panel-muted" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-ww-text-bright">
                      {review.username}
                    </span>
                    {review.badge && (
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-bold text-white ${review.badgeColor ?? "bg-ww-panel-muted"}`}
                      >
                        {review.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ww-text-dim">{review.timeAgo}</p>
                </div>
              </div>

              {review.recommended && (
                <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-500">
                  <ThumbsUp size={14} />
                  Recommended
                </p>
              )}

              <p
                className={`mt-2 text-sm leading-relaxed text-ww-text ${
                  expanded ? "" : "line-clamp-3"
                }`}
              >
                {review.content}
              </p>

              <button
                type="button"
                onClick={() =>
                  setExpandedReviews((prev) => ({
                    ...prev,
                    [review.id]: !prev[review.id],
                  }))
                }
                className="mt-1 inline-flex items-center gap-1 text-sm text-ww-accent hover:underline"
              >
                {expanded ? "Show less" : "Show more"}
                <ChevronDown
                  size={14}
                  className={`transition ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              <div className="mt-4 flex items-center gap-4 text-xs text-ww-text-dim">
                <span className="inline-flex items-center gap-1">
                  <ThumbsUp size={12} />
                  {review.likes}
                </span>
                <span className="inline-flex items-center gap-1">
                  <ThumbsDown size={12} />
                  {review.dislikes}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle size={12} />
                  {review.comments}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NovelReviewSection;
