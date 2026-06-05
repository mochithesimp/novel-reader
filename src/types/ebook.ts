export interface EbookRating {
  percent: number;
  reviewCount: number;
  label: string;
}

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  author: string;
  translator: string;
  price: number;
  cover: string;
  rating?: EbookRating;
}
