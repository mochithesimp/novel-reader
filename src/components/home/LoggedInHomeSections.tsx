import { useState } from "react";

import CarouselControls from "../common/CarouselControls";
import CoverCard from "./CoverCard";
import SectionHeading from "../common/SectionHeading";
import TrendingNovelsSidebar from "./TrendingNovelsSidebar";
import {
  loggedInPopularThisWeek,
  newReleases,
} from "../../constants/homeData";

const LoggedInHomeSections = () => {
  const [popularActive, setPopularActive] = useState(0);
  const [releasesActive, setReleasesActive] = useState(0);

  return (
    <section className="ww-container pb-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
        <div className="min-w-0 flex-1 space-y-10">
          <div>
            <SectionHeading title="Popular This Week" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
              {loggedInPopularThisWeek.map((novel) => (
                <CoverCard
                  key={novel.id}
                  novel={novel}
                  rank={novel.rank}
                  showMeta
                />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <CarouselControls
                total={3}
                active={popularActive}
                onPrev={() => setPopularActive((i) => (i - 1 + 3) % 3)}
                onNext={() => setPopularActive((i) => (i + 1) % 3)}
              />
            </div>
          </div>

          <div>
            <SectionHeading title="New Releases" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
              {newReleases.map((novel) => (
                <CoverCard key={novel.id} novel={novel} showTitleBelow />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <CarouselControls
                total={3}
                active={releasesActive}
                onPrev={() => setReleasesActive((i) => (i - 1 + 3) % 3)}
                onNext={() => setReleasesActive((i) => (i + 1) % 3)}
              />
            </div>
          </div>
        </div>

        <TrendingNovelsSidebar />
      </div>
    </section>
  );
};

export default LoggedInHomeSections;
