import type { ReactNode } from "react";

import type { NovelStatus } from "../../types/novel";

const overlayBase =
  "border border-ww-overlay-border shadow-sm backdrop-blur-[2px]";

export const StatusBadge = ({ status }: { status?: NovelStatus | string }) => {
  if (!status) return null;

  return (
    <span
      className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[10px] font-semibold ${overlayBase} bg-ww-overlay text-ww-overlay-text`}
    >
      {status}
    </span>
  );
};

export const StatusBadgeSm = ({ status }: { status?: NovelStatus | string }) => {
  if (!status) return null;

  return (
    <span
      className={`absolute left-1.5 top-1.5 rounded px-1.5 py-0.5 text-[10px] font-semibold ${overlayBase} bg-ww-overlay text-ww-overlay-text`}
    >
      {status}
    </span>
  );
};

export const CoverIconPill = ({
  children,
  className = "bottom-2 right-2",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`absolute flex h-6 w-6 items-center justify-center rounded-full ${overlayBase} bg-ww-overlay-pill text-ww-overlay-text ${className}`}
  >
    {children}
  </span>
);

export const CoverRank = ({ rank }: { rank: number }) => (
  <div className="absolute bottom-2 left-2 flex items-end gap-1">
    <span className="text-4xl font-extrabold leading-none text-ww-overlay-text drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
      {rank}
    </span>
    <span className="mb-1 text-[8px] font-bold uppercase text-ww-overlay-text/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
      Wuxiaworld
    </span>
  </div>
);
