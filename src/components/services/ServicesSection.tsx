"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HouseIcon, VillaIcon, RenovationIcon, KeyIcon } from "@/components/icons/Icons";

const serviceIcons: Record<string, React.FC<{ className?: string }>> = { "ferdi-ev": HouseIcon, "villa": VillaIcon, "renovasiya": RenovationIcon, "acar-tehvil": KeyIcon };

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <div className="label mb-2">Xidmətlər</div>
            <h2 className="heading-xl text-paper">Hər layihə <span className="italic text-bronze">fərqlidir</span></h2>
          </div>
          <Link href="/xidmetler" className="hidden sm:inline-flex items-center gap-1 text-[0.6875rem] font-medium text-white/25 hover:text-bronze transition-colors">
            Hamısı
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M10 4l3 4-3 4" /></svg>
          </Link>
        </div>
        <div className="w-full h-px bg-white/5 mb-6" />
        <div className="grid grid-cols-2 lg:hidden gap-3">
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`rounded-xl border border-white/5 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 50}ms` }}>
                {Icon && <Icon className="w-4 h-4 text-bronze mb-2.5" />}
                <h3 className="font-heading text-[0.8125rem] text-paper mb-1 font-normal">{service.title}</h3>
                <p className="text-[0.6875rem] text-white/25 leading-snug line-clamp-2">{service.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          {SERVICES.map((service, i) => (
            <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`group grid grid-cols-12 gap-5 py-5 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="col-span-1 text-white/15"><span className="text-[0.625rem] font-medium">0{i + 1}</span></div>
              <div className="col-span-3"><h3 className="heading-lg text-paper group-hover:text-bronze transition-colors">{service.title}</h3></div>
              <div className="col-span-6"><p className="text-[0.8125rem] text-white/30 leading-relaxed">{service.description}</p></div>
              <div className="col-span-2 flex items-center justify-end"><span className="text-[0.625rem] font-medium tracking-wider uppercase text-white/20 group-hover:text-bronze transition-colors">Ətraflı →</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
