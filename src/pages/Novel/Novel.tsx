import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import NovelAboutTab from "../../components/novel/NovelAboutTab";
import NovelChampionTab from "../../components/novel/NovelChampionTab";
import NovelChaptersTab from "../../components/novel/NovelChaptersTab";
import NovelHero from "../../components/novel/NovelHero";
import NovelMetaSection from "../../components/novel/NovelMetaSection";
import type { NovelDetailTab } from "../../components/novel/NovelDetailTabs";
import { getNovelDetail } from "../../constants/novelDetailData";

const Novel = () => {
  const { id } = useParams();
  const detail = getNovelDetail(Number(id));
  const [activeTab, setActiveTab] = useState<NovelDetailTab>("About");

  if (!detail) {
    return (
      <div className="ww-container py-16 text-center">
        <h1 className="text-2xl font-bold text-ww-text-bright">Novel not found</h1>
        <Link to="/" className="mt-4 inline-block text-ww-accent hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <NovelHero detail={detail} />

      <div className="novel-detail-section">
        <NovelMetaSection
          detail={detail}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === "About" && <NovelAboutTab detail={detail} />}
        {activeTab === "Chapters" && <NovelChaptersTab detail={detail} />}
        {activeTab === "Champion" && <NovelChampionTab detail={detail} />}
      </div>
    </div>
  );
};

export default Novel;
