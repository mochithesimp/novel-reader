import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useClickOutside } from "../../hooks/useClickOutside";
import NavDropdownPanel from "./NavDropdownPanel";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { label: "Profile", to: "/profile" },
  { label: "Notifications", to: "/profile?tab=notifications" },
  { label: "My Audiobooks", to: "/my-audiobooks" },
  { label: "My Ebooks", to: "/my-ebooks" },
  { label: "Settings", to: "/profile?tab=settings" },
] as const;

const LoggedInUserMenu = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useClickOutside(containerRef, () => setOpen(false));

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

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

      <NavDropdownPanel open={open} width="w-[240px]">
        <div className="flex items-center gap-3 border-b border-ww-border px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ww-panel-muted">
            <User size={20} className="text-ww-text-dim" />
          </div>
          <span className="text-sm font-bold text-ww-text-bright">{user?.username}</span>
        </div>

        <div className="py-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-2.5 text-sm text-ww-text-bright transition hover:bg-ww-panel-hover hover:text-ww-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleLogout}
            className="block w-full cursor-pointer border-0 bg-transparent px-4 py-2.5 text-left text-sm font-inherit text-ww-text-bright transition hover:bg-ww-panel-hover hover:text-ww-accent"
          >
            Log out
          </button>
        </div>

        <div className="border-t border-ww-border">
          <ThemeToggle />
        </div>
      </NavDropdownPanel>
    </div>
  );
};

export default LoggedInUserMenu;
