import type { NovelDetail } from "../../types/novel";
import NovelChapterList from "./NovelChapterList";
import NovelRelatedNovels from "./NovelRelatedNovels";

interface Props {
  detail: NovelDetail;
}

const NovelChaptersTab = ({ detail }: Props) => (
  <>
    <div className="ww-container pb-16 pt-8">
      <NovelChapterList chapterTab={detail.chapterTab} />
    </div>
    <NovelRelatedNovels novels={detail.relatedNovels} />
  </>
);

export default NovelChaptersTab;
