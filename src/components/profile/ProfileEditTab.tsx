import { useState } from "react";

import ProfileAvatarUpload from "./ProfileAvatarUpload";

interface Props {
  username: string;
  email: string;
}

const ProfileEditTab = ({ username, email }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <h2 className="text-center text-2xl font-bold text-ww-text-bright md:text-3xl">
        Your Profile
      </h2>

      <div className="mt-8 border-t border-ww-border pt-10">
        <ProfileAvatarUpload previewUrl={previewUrl} onFileSelect={handleFileSelect} />

        <div className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="profile-username"
              className="mb-1.5 block text-sm font-semibold text-ww-text-bright"
            >
              Username
            </label>
            <input
              id="profile-username"
              name="username"
              type="text"
              defaultValue={username}
              className="w-full rounded-md border border-ww-border bg-ww-panel px-4 py-3 text-sm text-ww-text-bright outline-none transition focus:border-ww-accent"
            />
          </div>

          <div>
            <label
              htmlFor="profile-email"
              className="mb-1.5 block text-sm font-semibold text-ww-text-bright"
            >
              Email
            </label>
            <input
              id="profile-email"
              name="email"
              type="email"
              defaultValue={email}
              className="w-full rounded-md border border-ww-border bg-ww-panel px-4 py-3 text-sm text-ww-text-bright outline-none transition focus:border-ww-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditTab;
