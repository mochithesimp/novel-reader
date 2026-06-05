import { useState } from "react";

import CarouselControls from "../common/CarouselControls";
import CoverCard from "./CoverCard";
import SectionHeading from "../common/SectionHeading";
import { trendingRanked } from "../../constants/homeData";

const PopularThisWeek = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="ww-container pb-10">
      <SectionHeading title="Popular This Week" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
        {trendingRanked.map((novel) => (
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
          active={active}
          onPrev={() => setActive((i) => (i - 1 + 3) % 3)}
          onNext={() => setActive((i) => (i + 1) % 3)}
        />
      </div>
    </section>
  );
};
export default PopularThisWeek;
