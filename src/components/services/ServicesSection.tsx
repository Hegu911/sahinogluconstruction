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
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="label mb-2">Xidmətlər</div>
            <h2 className="heading-xl text-text-primary">Hər layihə <span className="text-accent">fərqlidir</span></h2>
          </div>
          <Link href="/xidmetler" className="text-[0.6875rem] font-medium text-text-muted hover:text-accent transition-colors hidden sm:block">Hamısı →</Link>
        </div>
        <div className="w-full h-px bg-rule mb-6" />
        <div className="grid grid-cols-2 lg:hidden gap-px bg-rule">
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`bg-surface p-4 hover:bg-surface-light transition-colors ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 50}ms` }}>
                {Icon && <Icon className="w-4 h-4 text-accent mb-2" />}
                <h3 className="font-heading text-[0.8125rem] text-text-primary mb-1">{service.title}</h3>
                <p className="text-[0.6875rem] text-text-muted leading-snug line-clamp-2">{service.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          {SERVICES.map((service, i) => (
            <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`group grid grid-cols-12 gap-5 py-5 border-b border-rule hover:bg-surface-light transition-colors ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="col-span-1 text-text-muted"><span className="text-[0.625rem] font-medium">0{i + 1}</span></div>
              <div className="col-span-3"><h3 className="heading-lg text-text-primary group-hover:text-accent transition-colors">{service.title}</h3></div>
              <div className="col-span-6"><p className="text-[0.8125rem] text-text-secondary">{service.description}</p></div>
              <div className="col-span-2 flex items-center justify-end"><span className="text-[0.625rem] font-medium text-text-muted group-hover:text-accent transition-colors">Ətraflı →</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
