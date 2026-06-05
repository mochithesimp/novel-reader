import type { ReactNode } from "react";

import GenreMultiSelect from "./GenreMultiSelect";
import {
  genreOptions,
  languageFilters,
  sortFilters,
  statusFilters,
} from "../../constants/seriesData";

export type Language = (typeof languageFilters)[number];
export type Status = (typeof statusFilters)[number];
export type Sort = (typeof sortFilters)[number];

interface Props {
  language: Language;
  status: Status;
  sort: Sort;
  selectedGenres: string[];
  onLanguageChange: (value: Language) => void;
  onStatusChange: (value: Status) => void;
  onSortChange: (value: Sort) => void;
  onGenreSelect: (genre: string) => void;
  onGenreRemove: (genre: string) => void;
}

const FilterGroup = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-ww-text-bright">{label}</span>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const SeriesFilters = ({
  language,
  status,
  sort,
  selectedGenres,
  onLanguageChange,
  onStatusChange,
  onSortChange,
  onGenreSelect,
  onGenreRemove,
}: Props) => (
  <div className="ww-container space-y-6 pt-10">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <FilterGroup label="Languages">
        {languageFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onLanguageChange(item)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              language === item
                ? "bg-ww-accent font-medium text-white"
                : "text-ww-text hover:text-ww-text-bright"
            }`}
          >
            {item}
          </button>
        ))}
      </FilterGroup>

      <FilterGroup label="Status">
        {statusFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onStatusChange(item)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              status === item
                ? "bg-ww-accent font-medium text-white"
                : "text-ww-text hover:text-ww-text-bright"
            }`}
          >
            {item}
          </button>
        ))}
      </FilterGroup>
    </div>

    <FilterGroup label="Sort By">
      {sortFilters.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSortChange(item)}
          className={`rounded-full px-4 py-1.5 text-sm transition ${
            sort === item
              ? "bg-ww-accent font-medium text-white"
              : "text-ww-text hover:text-ww-text-bright"
          }`}
        >
          {item}
        </button>
      ))}
    </FilterGroup>

    <FilterGroup label="Genres">
      <GenreMultiSelect
        options={genreOptions}
        selected={selectedGenres}
        onSelect={onGenreSelect}
        onRemove={onGenreRemove}
      />
    </FilterGroup>
  </div>
);

export default SeriesFilters;
