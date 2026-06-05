import type { Novel } from "../types/novel";
import { cover } from "./homeData";

export const mockNovels: Novel[] = [
  {
    id: 1,
    slug: "chosen-beyond-fate",
    title: "Chosen: Beyond Fate",
    author: "Wey",
    cover: cover("chosen-beyond-fate"),
    latestChapter: "Chapter 30",
    rating: 4.9,
    status: "Ongoing",
    approval: 100,
  },
  {
    id: 2,
    slug: "nine-star-hegemon-body-arts",
    title: "Nine Star Hegemon Body Art",
    author: "Mad Snail",
    cover: cover("nine-star-hegemon-body-arts"),
    latestChapter: "Chapter 4800",
    rating: 4.6,
    status: "Ongoing",
    approval: 69,
  },
  {
    id: 3,
    slug: "martial-god-asura",
    title: "Martial God Asura",
    author: "Kindhearted Bee",
    cover: cover("martial-god-asura"),
    latestChapter: "Chapter 5000",
    rating: 4.7,
    status: "Ongoing",
    approval: 80,
  },
  {
    id: 4,
    slug: "solo-leveling-ragnarok",
    title: "Solo Leveling: Ragnarok",
    author: "Chugong",
    cover: cover("solo-leveling-ragnarok"),
    latestChapter: "Chapter 50",
    rating: 4.5,
    status: "Completed",
    approval: 71,
  },
];
