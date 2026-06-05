import type { SeriesItem } from "../types/novel";
import { cover } from "./homeData";

export const languageFilters = ["Any", "Chinese", "Korean"] as const;
export const statusFilters = ["Any", "Ongoing", "Completed", "Hiatus"] as const;
export const sortFilters = [
  "Name",
  "Popular",
  "Chapters",
  "New",
  "Rating",
  "Trending",
] as const;
export const genreOptions = [
  "Cheat Systems",
  "Comedy",
  "Cultivation",
  "Fantasy",
  "LitRPG",
  "Mystery",
  "Romance",
  "Sci-fi",
  "Slice of Life",
  "Sports",
  "Thriller",
  "Action",
  "Adventure",
  "Xuanhuan",
] as const;

export const seriesList: SeriesItem[] = [
  {
    id: 1,
    slug: "chosen-beyond-fate",
    title: "Chosen: Beyond Fate",
    author: "Wey",
    cover: cover("chosen-beyond-fate"),
    latestChapter: "Chapter 30",
    rating: 5.0,
    approval: 100,
    status: "Ongoing",
    description:
      "After the world destroyed itself, it was rebuilt. Upon perilous cliffs, towering cities rose once more. In this new world, fate is no longer written in stone—and one man must discover what it means to be Chosen.",
    genres: ["Mystery", "Thriller"],
  },
  {
    id: 2,
    slug: "13-mink-street",
    title: "13 Mink Street",
    author: "Wuxiaworld",
    cover: cover("13-mink-street"),
    latestChapter: "Chapter 20",
    rating: 4.6,
    approval: 92,
    status: "Ongoing",
    description:
      "On a quiet street where nothing is as it seems, ordinary lives collide with secrets that could unravel an entire city. A story of mystery, humor, and unexpected bonds.",
    genres: ["Fantasy", "Comedy"],
  },
  {
    id: 3,
    slug: "dragon-canon",
    title: "Dragon Canon",
    author: "Wuxiaworld",
    cover: cover("dragon-canon"),
    latestChapter: "Chapter 60",
    rating: 4.5,
    approval: 88,
    status: "Ongoing",
    description:
      "An ancient canon holds the key to mastering dragon arts—a power coveted by empires and feared by gods. One cultivator's journey will reshape the balance of the mortal realm.",
    genres: ["Fantasy", "Action"],
  },
  {
    id: 4,
    slug: "destiny-in-cinders",
    title: "Destiny in Cinders",
    author: "Wuxiaworld",
    cover: cover("destiny-in-cinders"),
    latestChapter: "Chapter 100",
    rating: 4.6,
    approval: 85,
    status: "Ongoing",
    description:
      "When destiny burns to ash, only embers remain. In a world where fate is forged in fire, one survivor must rise from the cinders to challenge the heavens themselves.",
    genres: ["Fantasy", "Adventure"],
  },
  {
    id: 5,
    slug: "against-the-gods",
    title: "Against the Gods",
    author: "Mars",
    cover: cover("against-the-gods"),
    latestChapter: "Chapter 1900",
    rating: 4.4,
    approval: 76,
    status: "Ongoing",
    description:
      "A boy betrayed by his clan and left for dead discovers a forbidden art that defies the heavens. His path will pit him against gods, empires, and the fate of the entire realm.",
    genres: ["Mystery", "Romance"],
  },
  {
    id: 6,
    slug: "martial-god-asura",
    title: "Martial God Asura",
    author: "Kindhearted Bee",
    cover: cover("martial-god-asura"),
    latestChapter: "Chapter 5000",
    rating: 4.2,
    approval: 50,
    status: "Ongoing",
    description:
      "In a world where martial artists vie for supremacy, a young man with a mysterious past must climb from the bottom of society to become a god among cultivators.",
    genres: ["Fantasy", "Xuanhuan"],
  },
  {
    id: 7,
    slug: "scripture-of-days-past",
    title: "Scripture of Days Past",
    author: "Wuxiaworld",
    cover: cover("scripture-of-days-past"),
    latestChapter: "Chapter 45",
    rating: 4.7,
    approval: 94,
    status: "Ongoing",
    description:
      "A scholar stumbles upon an ancient scripture that rewrites the history of cultivation—and his own destiny along with it. Secrets buried for millennia are about to surface.",
    genres: ["Fantasy", "Mystery"],
  },
  {
    id: 8,
    slug: "solo-leveling-ragnarok",
    title: "Solo Leveling: Ragnarok",
    author: "Chugong",
    cover: cover("solo-leveling-ragnarok"),
    latestChapter: "Chapter 50",
    rating: 4.5,
    approval: 71,
    status: "Completed",
    description:
      "The Earth's existence is under threat once more as Itarim, the gods of other worlds, turn their gaze toward humanity's last defender.",
    genres: ["Action", "Fantasy"],
  },
];
