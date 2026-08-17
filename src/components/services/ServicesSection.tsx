"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HouseIcon, VillaIcon, RenovationIcon, KeyIcon } from "@/components/icons/Icons";

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  "ferdi-ev": HouseIcon,
  "villa": VillaIcon,
  "renovasiya": RenovationIcon,
  "acar-tehvil": KeyIcon,
};

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-14 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 mb-10 lg:mb-14">
          <div className="lg:col-span-5">
            <div className="label mb-3">Xidmətlər</div>
            <h2 className="heading-xl text-ink">
              Hər layihə
              <br />
              <span className="italic text-bronze">fərqlidir</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="body-sm max-w-[400px]">
              Bünövrədən açar təhvilinə qədər — layihələndirmə, tikinti,
              bitirmə işləri və təhvil.
            </p>
          </div>
        </div>

        <div className="editorial-rule hidden lg:block" />

        <div className="grid grid-cols-2 lg:hidden gap-3">
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/xidmetler/${service.slug}`}
                className={`bg-paper-dark border border-border p-4 transition-all duration-700 hover:border-bronze group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {Icon && (
                  <div className="mb-3">
                    <Icon className="w-5 h-5 text-bronze" />
                  </div>
                )}
                <h3 className="font-heading text-sm text-ink group-hover:text-bronze transition-colors duration-300 mb-1.5 font-normal">
                  {service.title}
                </h3>
                <p className="text-[0.6875rem] text-text-muted leading-snug line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-3 text-[0.625rem] font-medium tracking-[0.06em] uppercase text-text-muted group-hover:text-bronze transition-all duration-300">
                  Ətraflı
                  <svg viewBox="0 0 16 16" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M10 4l3 4-3 4" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/xidmetler/${service.slug}`}
              className={`group grid grid-cols-12 gap-6 py-7 border-b border-border transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="col-span-1 text-text-muted">
                <span className="text-[0.65rem] font-medium">0{i + 1}</span>
              </div>
              <div className="col-span-4">
                <h3 className="heading-lg text-ink group-hover:text-bronze transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="col-span-5">
                <p className="body-sm text-[0.8125rem]">
                  {service.description}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted group-hover:text-bronze transition-all duration-300">
                  Ətraflı
                  <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M10 4l3 4-3 4" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
