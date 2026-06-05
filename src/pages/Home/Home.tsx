import HeroSection from "../../components/home/HeroSection";
import FscSubscriptionCarousel from "../../components/home/FscSubscriptionCarousel";
import LoggedInHomeSections from "../../components/home/LoggedInHomeSections";
import PromoBanners from "../../components/home/PromoBanners";
import PopularThisWeek from "../../components/home/PopularThisWeek";
import TrendingSection from "../../components/home/TrendingSection";
import TopSeriesSection from "../../components/home/TopSeriesSection";
import PopularGenresSection from "../../components/home/PopularGenresSection";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="pb-4">
      <HeroSection />
      <PromoBanners />

      {isAuthenticated ? (
        <>
          <LoggedInHomeSections />
          <FscSubscriptionCarousel />
        </>
      ) : (
        <>
          <PopularThisWeek />
          <TrendingSection />
        </>
      )}

      <TopSeriesSection />
      <PopularGenresSection />
    </div>
  );
};

export default Home;
