import HeroSection from "../../components/home/HeroSection";
import PromoBanners from "../../components/home/PromoBanners";
import PopularThisWeek from "../../components/home/PopularThisWeek";
import TrendingSection from "../../components/home/TrendingSection";
import TopSeriesSection from "../../components/home/TopSeriesSection";
import PopularGenresSection from "../../components/home/PopularGenresSection";

const Home = () => (
  <div className="pb-4">
    <HeroSection />
    <PromoBanners />
    <PopularThisWeek />
    <TrendingSection />
    <TopSeriesSection />
    <PopularGenresSection />
  </div>
);

export default Home;
