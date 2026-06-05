import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { resourceDropdownItems } from "../../constants/navConfig";

const ResourcesDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-1 transition ${
          open
            ? "font-extrabold text-ww-text-bright"
            : "font-medium text-ww-nav-inactive hover:text-ww-text-bright"
        }`}
      >
        Resources
        <ChevronDown
          size={14}
          className={`text-ww-accent transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        role="menu"
        className={`absolute top-[calc(100%+14px)] left-1/2 z-[60] w-[220px] -translate-x-1/2 transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-ww-caret" />

        <div className="overflow-hidden rounded-lg border border-ww-border bg-ww-panel py-2 shadow-2xl">
          {resourceDropdownItems.map((item) =>
            "path" in item ? (
              <Link
                key={item.label}
                to={item.path}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-bold text-ww-text-bright transition hover:bg-ww-panel-hover hover:text-ww-accent"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-bold text-ww-text-bright transition hover:bg-ww-panel-hover hover:text-ww-accent"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
