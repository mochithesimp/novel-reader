import { useEffect, useMemo, useState } from "react";
import { ChevronUp } from "lucide-react";

import SeriesFilters, {
  type Language,
  type Sort,
  type Status,
} from "../../components/series/SeriesFilters";
import SeriesListCard from "../../components/series/SeriesListCard";
import { seriesList } from "../../constants/seriesData";

const Series = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<Language>("Any");
  const [status, setStatus] = useState<Status>("Ongoing");
  const [sort, setSort] = useState<Sort>("New");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev : [...prev, genre],
    );
  };

  const removeGenre = (genre: string) => {
    setSelectedGenres((prev) => prev.filter((g) => g !== genre));
  };

  const filteredSeries = useMemo(() => {
    return seriesList.filter((series) => {
      if (status !== "Any" && series.status !== status) return false;

      if (selectedGenres.length > 0) {
        const hasGenre = selectedGenres.some((g) => series.genres.includes(g));
        if (!hasGenre) return false;
      }

      return true;
    });
  }, [status, selectedGenres]);

  return (
    <div className="-mt-14 flex min-h-[calc(100vh-3.5rem)] flex-col sm:-mt-16 sm:min-h-[calc(100vh-4rem)] md:-mt-[72px] md:min-h-[calc(100vh-72px)]">
      <section className="bg-ww-filter-bg pb-8 pt-14 sm:pt-16 md:pt-[72px]">
        <SeriesFilters
          language={language}
          status={status}
          sort={sort}
          selectedGenres={selectedGenres}
          onLanguageChange={setLanguage}
          onStatusChange={setStatus}
          onSortChange={setSort}
          onGenreSelect={addGenre}
          onGenreRemove={removeGenre}
        />
      </section>

      <section className="flex-1 bg-ww-list-bg py-8 pb-6">
        <div className="ww-container">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
            {filteredSeries.map((series) => (
              <SeriesListCard
                key={series.id}
                series={series}
                onGenreClick={addGenre}
              />
            ))}
          </div>

          {filteredSeries.length === 0 && (
            <p className="py-12 text-center text-ww-text-dim">
              No series match the selected filters.
            </p>
          )}
        </div>
      </section>

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-24 z-40 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ww-accent text-ww-accent transition hover:bg-ww-accent hover:text-white md:right-10"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Series;
