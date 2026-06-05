import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
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
  );
};

export default ThemeToggle;
