import CoverCard from "./CoverCard";
import SectionHeading from "../common/SectionHeading";
import { popularThisWeek } from "../../constants/homeData";

const PopularThisWeek = () => (
  <section className="ww-container pb-10">
    <SectionHeading title="Popular This Week" />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
      {popularThisWeek.map((novel) => (
        <CoverCard key={novel.id} novel={novel} showMeta />
      ))}
    </div>
  </section>
);

export default PopularThisWeek;
