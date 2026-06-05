import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  total?: number;
  active?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

const CarouselControls = ({
  total = 3,
  active = 0,
  onPrev,
  onNext,
}: Props) => (
  <div className="flex items-center justify-center gap-3">
    <button
      type="button"
      onClick={onPrev}
      aria-label="Previous"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-ww-border bg-ww-panel text-ww-text-dim transition hover:bg-ww-panel-hover hover:text-ww-text-bright"
    >
      <ChevronLeft size={16} />
    </button>

    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full transition ${
            i === active ? "bg-ww-accent" : "bg-ww-text-dim/50"
          }`}
        />
      ))}
    </div>

    <button
      type="button"
      onClick={onNext}
      aria-label="Next"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-ww-border bg-ww-panel text-ww-text-bright transition hover:bg-ww-panel-hover"
    >
      <ChevronRight size={16} />
    </button>
  </div>
);

export default CarouselControls;
