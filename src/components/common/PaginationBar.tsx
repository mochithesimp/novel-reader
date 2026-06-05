import { ChevronRight } from "lucide-react";

import CarouselControls from "./CarouselControls";

interface Props {
  total?: number;
  active?: number;
  onPrev?: () => void;
  onNext?: () => void;
  showAllUpdatesLink?: boolean;
}

const PaginationBar = ({
  total = 3,
  active = 0,
  onPrev,
  onNext,
  showAllUpdatesLink = false,
}: Props) => (
  <div className="relative flex min-h-[52px] items-center border-t border-ww-border/40 py-4">
    <div className="flex w-full justify-center">
      <CarouselControls
        total={total}
        active={active}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>

    {showAllUpdatesLink && (
      <a
        href="#"
        className="absolute right-0 hidden items-center gap-1 text-sm text-ww-text-dim transition hover:text-ww-text-bright sm:inline-flex"
      >
        Click Here For All Updates
        <ChevronRight size={14} />
      </a>
    )}
  </div>
);

export default PaginationBar;
