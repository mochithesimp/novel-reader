# Wuxiaworld Clone (Novel Reader)

A React clone of [Wuxiaworld](https://www.wuxiaworld.com) built with Vite, TypeScript, Tailwind CSS v4, and React Router. Includes dark/light theme support and responsive layouts modeled after the official site.

## Features

- **Homepage** — Hero banner, announcements, promo cards, popular/trending sections, genre carousels, and recent updates
- **Series page** — Language, status, sort, and multi-select genre filters with a two-column series grid
- **Ebooks page** — Purchasable ebook cards with ratings, reviews, and buy buttons
- **Theme toggle** — Day/night mode with persistence via `localStorage`
- **Navigation** — Resources dropdown (Ebooks, Webnovel Handbook), user menu, and scroll-aware header

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router v7
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/     # UI components (home, series, ebooks, layout)
├── constants/    # Mock data and nav config
├── context/      # Theme provider
├── hooks/        # Custom hooks
├── layouts/      # Main layout with navbar + footer
├── pages/        # Route pages (Home, Series, Ebooks, etc.)
├── routes/       # React Router setup
└── types/        # TypeScript types
```

## Routes

| Path       | Page    |
|------------|---------|
| `/`        | Home    |
| `/series`  | Series  |
| `/ebooks`  | Ebooks  |
| `/library` | Library |
| `/search`  | Search  |

## License

This project is for educational purposes and is not affiliated with Wuxiaworld.
