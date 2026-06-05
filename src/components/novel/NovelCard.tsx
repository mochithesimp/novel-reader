import { Link } from "react-router-dom";

import type { Novel } from "../../types/novel";

interface Props {
    novel: Novel;
}

const NovelCard = ({ novel }: Props) => {
    return (
        <Link
            to={`/novel/${novel.id}`}
            className="group block overflow-hidden rounded-xl bg-zinc-900 transition hover:-translate-y-1"
        >
            <img
                src={novel.cover}
                alt={novel.title}
                className="h-72 w-full object-cover"
            />

            <div className="p-4">
                <h2 className="line-clamp-1 font-bold group-hover:text-yellow-400">
                    {novel.title}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                    {novel.author}
                </p>

                <div className="mt-3 flex justify-between text-sm">
                    <span>⭐ {novel.rating}</span>

                    <span className="text-zinc-400">
                        {novel.latestChapter}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default NovelCard;