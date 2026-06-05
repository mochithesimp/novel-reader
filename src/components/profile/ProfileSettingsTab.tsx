import { useMemo, useState } from "react";

import { profileSettingsSections } from "../../constants/profileData";
import ProfileSettingRow from "./ProfileSettingRow";

const buildDefaultToggles = () => {
  const defaults: Record<string, boolean> = {};
  for (const section of profileSettingsSections) {
    for (const toggle of section.toggles ?? []) {
      defaults[toggle.id] = toggle.defaultValue;
    }
  }
  return defaults;
};

const ProfileSettingsTab = () => {
  const [toggles, setToggles] = useState(buildDefaultToggles);
  const sections = useMemo(() => profileSettingsSections, []);

  const handleToggle = (id: string, value: boolean) => {
    setToggles((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      {sections.map((section) => (
        <section key={section.id} className="mb-10">
          <h2 className="text-xl font-bold text-ww-text-bright md:text-2xl">
            {section.title}
          </h2>
          <div className="mt-4 border-t border-ww-border">
            {section.toggles?.map((toggle) => (
              <ProfileSettingRow
                key={toggle.id}
                label={toggle.label}
                description={toggle.description}
                checked={toggles[toggle.id]}
                onChange={(value) => handleToggle(toggle.id, value)}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mb-10">
        <h2 className="text-xl font-bold text-ww-text-bright md:text-2xl">
          Security
        </h2>
        <div className="mt-4 space-y-6 border-t border-ww-border pt-5">
          <div>
            <p className="font-semibold text-ww-text-bright">
              Two-factor authentication (2FA)
            </p>
            <div className="mt-2 flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-ww-text-bright underline hover:text-ww-accent">
                Set up authenticator app
              </a>
              <a href="#" className="text-ww-text-bright underline hover:text-ww-accent">
                Reset authenticator app
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-ww-text-bright">Passkeys</p>
            <a
              href="#"
              className="mt-2 inline-block text-sm text-ww-text-bright underline hover:text-ww-accent"
            >
              Manage passkeys
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ww-text-bright md:text-2xl">
          Account Settings
        </h2>
        <div className="mt-4 space-y-8 border-t border-ww-border pt-5">
          <div>
            <p className="font-semibold text-ww-text-bright">Change password</p>
            <button
              type="button"
              className="mt-4 rounded-full bg-gradient-to-r from-[#5eb3ff] to-ww-accent px-6 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Change password
            </button>
          </div>

          <div>
            <p className="font-semibold text-ww-text-bright">
              Delete my Wuxiaworld account
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ww-text-dim">
              If you delete your account, you will lose access to all associated
              bookmarks, purchases, and settings. Account deletion is irreversible.
            </p>
            <button
              type="button"
              className="mt-4 rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-red-500"
            >
              Delete account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSettingsTab;
