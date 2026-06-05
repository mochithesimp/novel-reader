import { MessageCircle } from "lucide-react";

import { promoBanners } from "../../constants/homeData";

const PromoBanners = () => (
  <section className="ww-container pb-8">
    <div className="grid gap-4 md:grid-cols-2">
      {promoBanners.map((banner) => (
        <a
          key={banner.id}
          href="#"
          className="relative flex min-h-[140px] items-end overflow-hidden rounded-xl p-6 transition hover:brightness-110"
          style={{ background: banner.gradient }}
        >
          <div>
            {banner.badge && (
              <span className="mb-2 inline-block rounded bg-white/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {banner.badge}
              </span>
            )}
            <h3 className="max-w-[260px] text-lg font-extrabold leading-tight text-white sm:text-xl">
              {banner.title}
            </h3>
            {banner.cta && (
              <span className="mt-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
                {banner.cta}
              </span>
            )}
          </div>

          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/25 px-2 py-1 text-xs text-white">
            <MessageCircle size={12} />
            {banner.comments}
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default PromoBanners;
