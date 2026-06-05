import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

import ProfileEditTab from "../../components/profile/ProfileEditTab";
import ProfileNotificationsTab from "../../components/profile/ProfileNotificationsTab";
import ProfileSettingsTab from "../../components/profile/ProfileSettingsTab";
import ProfileTabs, { type ProfileTab } from "../../components/profile/ProfileTabs";
import { useAuth } from "../../context/AuthContext";

const tabFromParam = (value: string | null): ProfileTab => {
  if (value === "notifications") return "Notifications";
  if (value === "settings") return "Settings";
  return "Edit Profile";
};

const paramFromTab = (tab: ProfileTab): string | null => {
  if (tab === "Notifications") return "notifications";
  if (tab === "Settings") return "settings";
  return null;
};

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<ProfileTab>(() =>
    tabFromParam(searchParams.get("tab")),
  );

  useEffect(() => {
    setActiveTab(tabFromParam(searchParams.get("tab")));
  }, [searchParams]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleTabChange = (tab: ProfileTab) => {
    setActiveTab(tab);
    const param = paramFromTab(tab);
    if (param) {
      setSearchParams({ tab: param });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="min-h-[calc(100vh-3.5rem)] bg-ww-bg sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-72px)]">
      <div className="ww-container py-8 pb-20">
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="mt-12">
          {activeTab === "Edit Profile" && (
            <ProfileEditTab
              username={user?.username ?? ""}
              email={user?.email ?? ""}
            />
          )}
          {activeTab === "Notifications" && <ProfileNotificationsTab />}
          {activeTab === "Settings" && <ProfileSettingsTab />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
