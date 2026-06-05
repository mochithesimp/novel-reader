export type NovelStatus = "Ongoing" | "Completed";

export interface Novel {
  id: number;
  slug: string;
  title: string;
  author: string;
  cover: string;
  latestChapter: string;
  rating: number;
  status?: NovelStatus;
  description?: string;
  approval?: number;
}

export interface Announcement {
  id: number;
  title: string;
  timeAgo: string;
}

export interface FeaturedSlide {
  id: number;
  title: string;
  status: NovelStatus;
  approval: number;
  description: string;
  cover: string;
  banner: string;
}

export interface PromoBanner {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  cta?: string;
  comments: number;
  gradient: string;
}

export interface RankedNovel extends Novel {
  rank: number;
  approval: number;
}

export interface TrendingSidebarNovel extends Novel {
  rank: number;
  approval: number;
  chapterCount: number;
}

export interface GenreSeries {
  id: number;
  genre: string;
  gradient: string;
  novel: Novel;
  medal?: "gold" | "blue";
}

export interface RecentUpdate {
  id: number;
  seriesTitle: string;
  chapterTitle: string;
  translator: string;
  timeAgo: string;
  cover: string;
}

export interface SeriesItem extends Novel {
  approval: number;
  genres: string[];
}

export interface FscSubscriptionOffer {
  id: number;
  slug: string;
  title: string;
  cover: string;
  status: NovelStatus;
  priceMonthly: string;
}
