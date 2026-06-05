export type NotificationFilter = "All" | "News" | "Unlock" | "Chapters" | "Comments";

export const notificationFilters: NotificationFilter[] = [
  "All",
  "News",
  "Unlock",
  "Chapters",
  "Comments",
];

export interface ProfileToggleSetting {
  id: string;
  label: string;
  description: string;
  defaultValue: boolean;
}

export interface ProfileSettingsSection {
  id: string;
  title: string;
  toggles?: ProfileToggleSetting[];
}

export const profileSettingsSections: ProfileSettingsSection[] = [
  {
    id: "general",
    title: "General Settings",
    toggles: [
      {
        id: "auto-unlock",
        label: "Enable Auto Unlock",
        description:
          "Automatically unlock chapters without confirmation. Unlock will use WTU, Keys, and Karma, in that order.",
        defaultValue: false,
      },
      {
        id: "paragraph-comments",
        label: "Paragraph Comments",
        description: "Show paragraph comments in the comment section.",
        defaultValue: true,
      },
    ],
  },
  {
    id: "web-notifications",
    title: "Web Notification Settings",
    toggles: [
      {
        id: "unlock-updates",
        label: "Unlock Updates",
        description: "Receive notifications when chapters are ready to be unlocked",
        defaultValue: true,
      },
    ],
  },
  {
    id: "push-notifications",
    title: "Push Notification Settings",
    toggles: [
      {
        id: "chapter-updates",
        label: "Chapter Updates",
        description:
          "Receive notifications when chapters of bookmarked series are published",
        defaultValue: true,
      },
    ],
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    toggles: [
      {
        id: "marketing",
        label: "Marketing",
        description: "Allow marketing and promotional emails from Wuxiaworld",
        defaultValue: true,
      },
    ],
  },
];
