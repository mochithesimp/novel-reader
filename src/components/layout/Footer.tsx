import WuxiaLogo from "../common/WuxiaLogo";
import { footerLinks } from "../../constants/homeData";

const socialIcons = ["Discord", "TikTok", "Instagram", "Facebook", "X"];

const Footer = () => (
  <footer>
    <div className="bg-ww-footer-bg py-10">
      <div className="ww-container flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-ww-text-bright">
            <WuxiaLogo />
            <span className="text-sm font-extrabold tracking-wide">WUXIAWORLD</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md border border-ww-border px-4 py-2 text-xs text-ww-text-bright"
            >
              Download on the App Store
            </button>
            <button
              type="button"
              className="rounded-md border border-ww-border px-4 py-2 text-xs text-ww-text-bright"
            >
              GET IT ON Google Play
            </button>
          </div>
        </div>

        <div className="flex gap-16">
          <ul className="space-y-3 text-sm font-bold text-ww-text-bright">
            {footerLinks.column1.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-ww-accent">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm font-bold text-ww-text-bright">
            {footerLinks.column2.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-ww-accent">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          {socialIcons.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-ww-text-bright transition hover:text-ww-accent"
            >
              {name[0]}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-ww-border bg-ww-footer-bg py-5">
      <div className="ww-container flex flex-col items-center justify-between gap-3 text-xs text-ww-text-dim sm:flex-row">
        <span>Copyright © Wuxiaworld 2026</span>
        <div className="flex flex-wrap items-center gap-2">
          {footerLinks.legal.map((link, i) => (
            <span key={link} className="inline-flex items-center gap-2">
              {i > 0 && <span>·</span>}
              <a href="#" className="hover:text-ww-text-bright">
                {link}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
