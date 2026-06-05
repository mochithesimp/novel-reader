import { useEffect, useRef, useState } from "react";
import { Moon, Sun, User } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const UserMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Profile"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ww-panel transition hover:bg-ww-panel-hover"
      >
        <User size={18} className="text-ww-accent" />
      </button>

      <div
        className={`absolute top-[calc(100%+10px)] left-1/2 z-[60] w-[220px] -translate-x-1/2 transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-ww-caret" />

        <div className="overflow-hidden rounded-xl border border-ww-border bg-ww-panel shadow-2xl">
          <div className="px-4 py-5">
            <button
              type="button"
              className="w-full rounded-full bg-ww-accent py-2.5 text-sm font-bold tracking-wide text-white uppercase transition hover:brightness-110"
            >
              Log In
            </button>
          </div>

          <div className="border-t border-ww-border" />

          <div className="flex items-center justify-between px-4 py-3.5">
            <span className="text-sm text-ww-text-dim">Mode</span>

            <button
              type="button"
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="relative h-7 w-12 rounded-full bg-ww-toggle-track transition"
            >
              <span
                className={`absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-ww-toggle-thumb shadow-sm transition-all duration-200 ${
                  isDark ? "left-0.5" : "left-[calc(100%-1.625rem)]"
                }`}
              >
                {isDark ? (
                  <Moon size={12} className="text-ww-text-bright" />
                ) : (
                  <Sun size={12} className="text-ww-accent" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenuDropdown;
