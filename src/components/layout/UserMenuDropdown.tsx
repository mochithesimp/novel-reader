import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

import { useClickOutside } from "../../hooks/useClickOutside";
import NavDropdownPanel from "./NavDropdownPanel";
import ThemeToggle from "./ThemeToggle";

const UserMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setOpen(false));

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

      <NavDropdownPanel open={open}>
        <div className="px-4 py-5">
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-ww-accent py-2.5 text-center text-sm font-bold tracking-wide text-white uppercase transition hover:brightness-110"
          >
            Log In
          </Link>
        </div>

        <div className="border-t border-ww-border">
          <ThemeToggle />
        </div>
      </NavDropdownPanel>
    </div>
  );
};

export default UserMenuDropdown;
