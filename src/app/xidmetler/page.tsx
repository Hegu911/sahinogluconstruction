"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesPage() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-10 lg:py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 mb-12 lg:mb-16">
              <div className="lg:col-span-6">
                <div className="label mb-3">Xidmətlər</div>
                <h1 className="heading-xl text-text-primary">
                  Tikintinin<br />hər<br /><span className="italic text-accent">mərhələsində</span>
                </h1>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="text-[0.875rem] text-text-secondary">14 illik təcrübəmizə əsaslanaraq, layihələndirmədən açar təhvilinə qədər tam xidmət spektri.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 lg:pb-20 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div ref={ref}>
              {SERVICES.map((service, i) => (
                <Link key={service.slug} href={`/xidmetler/${service.slug}`} className={`group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 lg:gap-6 py-5 lg:py-7 border-b border-rule transition-all duration-700 hover:bg-surface hover:shadow-sm rounded-xl px-3 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="hidden sm:block sm:col-span-1 text-text-muted/60"><span className="text-[0.6875rem] font-medium">0{i + 1}</span></div>
                  <div className="sm:col-span-4 lg:col-span-4"><h2 className="heading-lg text-text-primary group-hover:text-accent transition-colors">{service.title}</h2></div>
                  <div className="sm:col-span-5 lg:col-span-5">
                    <p className="text-[0.8125rem] text-text-muted">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {service.features.slice(0, 3).map((f) => (<span key={f} className="text-[0.6875rem] px-2 py-0.5 bg-surface text-text-muted rounded-lg">{f}</span>))}
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex items-start">
                    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted group-hover:text-accent transition-colors">Ətraflı <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M10 4l3 4-3 4" /></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
