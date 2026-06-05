import { useRef, useState } from "react";
import { Gem, KeyRound } from "lucide-react";

import { useClickOutside } from "../../hooks/useClickOutside";
import NavDropdownPanel from "./NavDropdownPanel";

const KarmaDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Karma"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ww-panel transition hover:bg-ww-panel-hover"
      >
        <Gem size={18} className={open ? "text-ww-accent" : "text-ww-text-bright"} />
      </button>

      <NavDropdownPanel open={open} width="w-[260px]">
        <div className="space-y-4 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm font-semibold text-ww-text-bright">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-base text-amber-400">☯</span>0
              </span>
              <span className="inline-flex items-center gap-1.5">
                <KeyRound size={14} className="text-orange-400" />6
              </span>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-ww-accent px-3 py-1.5 text-xs font-semibold text-ww-text-bright transition hover:bg-ww-panel-hover"
            >
              <span className="text-amber-400">☯</span>
              Karma Shop
            </button>
          </div>

          <div className="border-t border-ww-border pt-4">
            <p className="text-sm font-bold text-ww-text-bright">Daily rewards</p>
            <p className="mt-1 text-xs text-ww-text-dim">
              Complete missions to earn keys!
            </p>
            <button
              type="button"
              className="mt-3 w-full rounded-full border border-ww-accent py-2 text-sm font-semibold text-ww-text-bright transition hover:bg-ww-panel-hover"
            >
              View missions
            </button>
          </div>

          <div className="space-y-2 border-t border-ww-border pt-3 text-sm text-ww-text-bright">
            {["Champion", "Billing", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-1 transition hover:text-ww-accent"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </NavDropdownPanel>
    </div>
  );
};

export default KarmaDropdown;
