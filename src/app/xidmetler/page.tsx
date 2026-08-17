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
        <section className="py-10 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 mb-12 lg:mb-16">
              <div className="lg:col-span-6">
                <div className="label mb-3">Xidmətlər</div>
                <h1 className="heading-xl text-paper">
                  Tikintinin
                  <br />
                  hər
                  <br />
                  <span className="italic text-bronze">mərhələsində</span>
                </h1>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="body-sm text-paper/40">
                  14 illik təcrübəmizə əsaslanaraq, layihələndirmədən açar
                  təhvilinə qədər tam xidmət spektri.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-paper/5 mb-8" />

            <div ref={ref}>
              {SERVICES.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/xidmetler/${service.slug}`}
                  className={`group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 lg:gap-6 py-5 lg:py-7 border-b border-paper/5 transition-all duration-700 hover:bg-paper/[0.02] ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="hidden sm:block sm:col-span-1 text-paper/15">
                    <span className="text-[0.65rem] font-medium">0{i + 1}</span>
                  </div>
                  <div className="sm:col-span-4 lg:col-span-4">
                    <h2 className="heading-md lg:heading-lg text-paper group-hover:text-bronze transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <div className="sm:col-span-5 lg:col-span-5">
                    <p className="body-sm text-[0.8125rem] text-paper/30">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {service.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[0.65rem] px-2 py-0.5 bg-paper/[0.05] text-paper/30 rounded-lg">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex items-start">
                    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-paper/20 group-hover:text-bronze transition-colors">
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
      </main>
      <Footer />
    </>
  );
}
