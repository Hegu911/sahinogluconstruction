"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HouseIcon, VillaIcon, RenovationIcon, KeyIcon } from "@/components/icons/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  house: HouseIcon,
  villa: VillaIcon,
  renovation: RenovationIcon,
  key: KeyIcon,
};

export default function ServicesPage() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-8 lg:py-14 bg-surface-blue">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
              <div className="lg:col-span-6">
                <div className="label-light mb-2">Xidmətlər</div>
                <h1 className="heading-xl text-white mb-3">
                  Tikintinin hər<br /><span className="italic text-accent-light">mərhələsində</span>
                </h1>
                <p className="text-[0.875rem] text-text-muted-blue max-w-[320px]">14 illik təcrübəmizlə layihələndirmədən açar təhvilinə qədər tam xidmət spektri.</p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-2.5">
                {SERVICES.map((s) => {
                  const Icon = iconMap[s.icon] || HouseIcon;
                  return (
                    <Link key={s.slug} href={`/xidmetler/${s.slug}`} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-accent-light shrink-0" />
                      <span className="text-[0.75rem] font-medium text-white">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 lg:pb-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div ref={ref}>
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon] || HouseIcon;
                return (
                  <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 lg:gap-6 py-5 lg:py-7 border-b border-rule transition-all duration-700 hover:bg-surface-alt hover:shadow-sm rounded-xl px-3 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="hidden sm:flex sm:col-span-1 text-text-muted/60 items-start pt-1"><Icon className="w-5 h-5" /></div>
                    <div className="sm:col-span-4 lg:col-span-4"><h2 className="heading-lg text-text-primary group-hover:text-accent transition-colors">{service.title}</h2></div>
                    <div className="sm:col-span-5 lg:col-span-5">
                      <p className="text-[0.8125rem] text-text-muted">{service.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {service.features.slice(0, 3).map((f) => (<span key={f} className="text-[0.6875rem] px-2 py-0.5 bg-surface-alt text-text-muted rounded-lg">{f}</span>))}
                      </div>
                    </div>
                    <div className="sm:col-span-2 flex items-start">
                      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted group-hover:text-accent transition-colors">Ətraflı <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M10 4l3 4-3 4" /></svg></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
