export type NovelDetailTab = "About" | "Chapters" | "Champion";

interface Props {
  activeTab: NovelDetailTab;
  onTabChange: (tab: NovelDetailTab) => void;
}

const tabs: { id: NovelDetailTab; label: string; sponsor?: boolean }[] = [
  { id: "About", label: "About" },
  { id: "Chapters", label: "Chapters" },
  { id: "Champion", label: "Champion", sponsor: true },
];

const NovelDetailTabs = ({ activeTab, onTabChange }: Props) => (
  <div className="flex items-end">
    {tabs.map((tab, index) => (
      <div key={tab.id} className="flex items-end">
        {index > 0 && <div className="mx-8 mb-3 w-px self-stretch bg-ww-border" />}
        <div className={`flex flex-col ${tab.sponsor ? "items-center" : ""}`}>
          {tab.sponsor && (
            <span className="mb-2 whitespace-nowrap rounded bg-purple-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              Sponsor this story!
            </span>
          )}
          <button
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`relative pb-3 text-lg font-bold transition md:text-xl ${
              activeTab === tab.id
                ? "text-ww-text-bright"
                : "text-ww-text-dim hover:text-ww-text-bright"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-ww-accent" />
            )}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default NovelDetailTabs;
