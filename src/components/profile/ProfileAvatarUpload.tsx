import { useRef } from "react";

interface Props {
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
}

const ProfileAvatarUpload = ({ previewUrl, onFileSelect }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) return;
    if (file.size > 500 * 1024) return;
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="flex h-40 w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-ww-panel-muted text-center transition hover:bg-ww-panel-hover md:h-44 md:w-44"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <p className="px-4 text-sm leading-relaxed text-ww-text-dim">
            Drag &amp; Drop your picture or{" "}
            <span className="text-ww-accent">Browse</span>
          </p>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,image/jpeg,image/png"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      <ul className="mt-4 space-y-1 text-center text-xs text-ww-text-dim">
        <li>• Image must be a .jpg or .png</li>
        <li>• Max file size is 500 KB</li>
      </ul>
    </div>
  );
};

export default ProfileAvatarUpload;
