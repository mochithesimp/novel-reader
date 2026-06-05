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

export interface NovelReview {
  id: number;
  username: string;
  badge?: string;
  badgeColor?: string;
  timeAgo: string;
  recommended: boolean;
  content: string;
  likes: number;
  dislikes: number;
  comments: number;
}

export interface NovelSubscriptionTier {
  id: number;
  label: string;
  price: string;
  tierName: string;
  description: string;
}

export interface RelatedNovelItem extends Novel {
  approval: number;
  badge?: string;
}

export interface NovelChapterEntry {
  id: number;
  title: string;
  date: string;
  karmaCost?: number;
}

export interface NovelVolume {
  id: number;
  title: string;
  chapterCount: number;
  chapters: NovelChapterEntry[];
}

export interface NovelChapterTabData {
  latestChapter: string;
  updatedAgo: string;
  sortOptions: readonly string[];
  volumes: NovelVolume[];
}

export interface ChampionAccessCard {
  id: string;
  header: string;
  headerGradient: string;
  value: string;
  label: string;
}

export interface ChampionTabData {
  headline: string;
  subtitle: string;
  tagline: string;
  accessCards: ChampionAccessCard[];
  tiers: NovelSubscriptionTier[];
}

export interface NovelDetail extends Novel {
  approval: number;
  translator: string;
  reviewCount: number;
  chapterCount: number;
  licensedFrom: string;
  genres: string[];
  tags: string[];
  shortSynopsis: string;
  fullSynopsis: string;
  translatorNote: string;
  freeChaptersLabel: string;
  freeChaptersCountdown: string;
  reviews: NovelReview[];
  subscriptionTiers: NovelSubscriptionTier[];
  relatedNovels: RelatedNovelItem[];
  chapterTab: NovelChapterTabData;
  championTab: ChampionTabData;
}
