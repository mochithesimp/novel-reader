import { useState } from "react";

import CarouselControls from "../common/CarouselControls";
import CoverCard from "./CoverCard";
import SectionHeading from "../common/SectionHeading";
import { newReleases } from "../../constants/homeData";

const TrendingSection = () => {
  const [releasesActive, setReleasesActive] = useState(0);

  return (
    <section className="ww-container pb-10">
      <div>
        <SectionHeading title="New Releases" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {newReleases.map((novel) => (
            <CoverCard key={novel.id} novel={novel} />
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
    </section>
  );
};

export default TrendingSection;
