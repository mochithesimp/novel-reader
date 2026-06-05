import { useState } from "react";

import {
  notificationFilters,
  type NotificationFilter,
} from "../../constants/profileData";

const ProfileNotificationsTab = () => {
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>("All");

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-ww-text-bright md:text-3xl">
          Notifications
        </h2>
        <button
          type="button"
          className="shrink-0 text-sm text-ww-text-dim underline transition hover:text-ww-text-bright"
        >
          Mark all as read
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {notificationFilters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border border-ww-accent text-ww-text-bright"
                  : "bg-ww-panel text-ww-text-bright hover:bg-ww-panel-hover"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="mt-16 text-sm text-ww-text-dim">No notifications</p>
    </div>
  );
};

export default ProfileNotificationsTab;
