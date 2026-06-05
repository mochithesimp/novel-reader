import { useRef, useState } from "react";
import { Bell } from "lucide-react";

import { useClickOutside } from "../../hooks/useClickOutside";
import NavDropdownPanel from "./NavDropdownPanel";

const NotificationsDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Notifications"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ww-panel transition hover:bg-ww-panel-hover"
      >
        <Bell size={18} className={open ? "text-ww-accent" : "text-ww-text-bright"} />
      </button>

      <NavDropdownPanel open={open} width="w-[280px]">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-ww-text-dim">
              Notifications{" "}
              <span className="font-semibold text-ww-accent">0</span>
            </p>
            <a
              href="#"
              className="text-xs font-bold tracking-wide !text-ww-accent hover:underline"
              onClick={() => setOpen(false)}
            >
              VIEW ALL
            </a>
          </div>

          <div className="my-3 border-t border-ww-border" />

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ww-text-dim">
            <a href="#" className="underline transition hover:text-ww-accent">
              Mark all as read
            </a>
            <a href="#" className="underline transition hover:text-ww-accent">
              Enable push notifications
            </a>
          </div>
        </div>
      </NavDropdownPanel>
    </div>
  );
};

export default NotificationsDropdown;
