import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

import WuxiaLogo from "../common/WuxiaLogo";
import ResourcesDropdown from "./ResourcesDropdown";
import UserMenuDropdown from "./UserMenuDropdown";
import { navLinks } from "../../constants/navConfig";
import { useHideOnScroll } from "../../hooks/useHideOnScroll";

const Navbar = () => {
  const visible = useHideOnScroll();
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "#") return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-ww-border/40 bg-ww-header transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="ww-container flex h-14 items-center justify-between gap-6 sm:h-16 md:h-[72px]">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-2 text-ww-text-bright"
          aria-label="Wuxiaworld"
        >
          <WuxiaLogo />
          <span className="hidden text-sm font-extrabold tracking-wide sm:inline">
            WUXIAWORLD
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-ww-text lg:flex">
          {navLinks.map((link) =>
            "hasDropdown" in link ? (
              <ResourcesDropdown key={link.label} />
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`transition ${
                  isActive(link.path)
                    ? "text-[15px] font-extrabold tracking-wide !text-ww-text-bright"
                    : "font-normal !text-ww-nav-inactive hover:!text-ww-text-bright"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <label className="relative hidden sm:block">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ww-text-dim"
            />
            <input
              type="search"
              placeholder="Search"
              className="h-9 w-44 rounded-full border border-ww-border bg-ww-bg pl-9 pr-4 text-sm text-ww-text-bright outline-none placeholder:text-ww-text-dim focus:border-ww-accent md:w-52"
            />
          </label>

          <UserMenuDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
