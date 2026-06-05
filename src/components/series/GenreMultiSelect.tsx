import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface Props {
  options: readonly string[];
  selected: string[];
  onSelect: (genre: string) => void;
  onRemove: (genre: string) => void;
}

const GenreMultiSelect = ({ options, selected, onSelect, onRemove }: Props) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const available = options.filter((g) => !selected.includes(g));

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((prev) => !prev);
          }
        }}
        className="flex min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-lg border border-ww-border bg-ww-panel px-3 py-2 text-left"
      >
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {selected.map((genre) => (
            <span
              key={genre}
              className="inline-flex items-center gap-1.5 rounded-md bg-ww-panel-muted px-2.5 py-1 text-sm font-semibold text-ww-text-bright"
            >
              {genre}
              <button
                type="button"
                aria-label={`Remove ${genre}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(genre);
                }}
                className="flex h-4 w-4 items-center justify-center rounded-full text-ww-text-dim transition hover:text-ww-text-bright"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <span className="text-sm text-ww-text-dim">Select</span>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 text-ww-text-bright transition ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute top-full right-0 left-0 z-30 mt-0 overflow-hidden rounded-b-lg border border-ww-border bg-ww-panel shadow-xl">
          <div className="max-h-[280px] overflow-y-auto py-1 [scrollbar-width:thin]">
            {available.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => {
                  onSelect(genre);
                  setOpen(false);
                }}
                className="block w-full px-4 py-2.5 text-left text-sm text-ww-text transition hover:bg-ww-panel-hover hover:text-ww-text-bright"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreMultiSelect;
