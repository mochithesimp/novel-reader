export type ProfileTab = "Edit Profile" | "Notifications" | "Settings";

interface Props {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

const tabs: ProfileTab[] = ["Edit Profile", "Notifications", "Settings"];

const ProfileTabs = ({ activeTab, onTabChange }: Props) => (
  <div className="border-b border-ww-border">
    <div className="flex justify-center gap-10 md:gap-14">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`relative pb-3 text-sm transition md:text-base ${
              isActive
                ? "font-semibold text-ww-text-bright"
                : "font-normal text-ww-text-dim hover:text-ww-text-bright"
            }`}
          >
            {tab}
            {isActive && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-ww-accent" />
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default ProfileTabs;
