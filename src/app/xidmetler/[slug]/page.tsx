"use client";

import { use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES, PROJECTS, COMPANY } from "@/lib/data";
import { ShieldIcon, CalendarIcon, MapPinIcon } from "@/components/icons/Icons";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 flex items-center justify-center min-h-screen bg-surface">
          <div className="text-center px-5">
            <h1 className="heading-lg text-text-primary mb-4">Xidmət tapılmadı</h1>
            <Link href="/xidmetler" className="btn-secondary">Qayıt</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.category === service.slug || p.category === "ferdi-ev" || p.category === "villa" || p.category === "renovasiya").slice(0, 2);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-10 lg:py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <nav className="flex items-center gap-1.5 text-[0.6875rem] text-text-muted mb-8 lg:mb-12">
              <Link href="/" className="hover:text-accent transition-colors">Ana Səhifə</Link><span>/</span>
              <Link href="/xidmetler" className="hover:text-accent transition-colors">Xidmətlər</Link><span>/</span>
              <span className="text-text-secondary">{service.title}</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="label mb-3">{service.title}</div>
                <h1 className="heading-xl text-text-primary mb-6">{service.title}</h1>
                <p className="text-[0.9375rem] text-text-secondary mb-8 max-w-[520px] leading-relaxed">{service.fullDescription}</p>
                <div className="w-full h-px bg-rule mb-8" />
                <h3 className="heading-lg text-text-primary mb-4">Xidmətə daxildir</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 py-2.5 border-b border-rule">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      <span className="text-[0.875rem] text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Əlaqə saxla</a>
                  <a href="tel:+994705552726" className="btn-secondary">Zəng Et</a>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-surface-blue p-6 rounded-xl card-shadow-blue">
                    <div className="label-light mb-4">Zəmanət</div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5"><ShieldIcon className="w-5 h-5 text-accent-light shrink-0 mt-0.5" /><div><div className="text-[0.875rem] font-medium text-white">10 il struktur zəmanəti</div><div className="text-[0.75rem] text-text-muted-blue mt-0.5">Bünövrə və konstruksiya</div></div></div>
                      <div className="flex items-start gap-2.5"><CalendarIcon className="w-5 h-5 text-accent-light shrink-0 mt-0.5" /><div><div className="text-[0.875rem] font-medium text-white">3 il tam təmir zəmanəti</div><div className="text-[0.75rem] text-text-muted-blue mt-0.5">Daxili bitirmə işləri</div></div></div>
                    </div>
                  </div>
                  {relatedProjects.length > 0 && (
                    <div className="bg-surface-blue p-6 rounded-xl card-shadow-blue">
                      <div className="label-light mb-4">Əlaqəli Layihələr</div>
                      <div className="space-y-3">
                        {relatedProjects.map((p) => (
                          <Link key={p.id} href={`/layiheler/${p.id}`} className="flex items-center gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors">
                            <img src={p.heroImage} alt={p.title} className="w-14 h-10 object-cover rounded-lg shrink-0" />
                            <div>
                              <div className="text-[0.8125rem] font-medium text-white group-hover:text-accent-light transition-colors">{p.title}</div>
                              <div className="flex items-center gap-1 text-[0.6875rem] text-text-muted-blue mt-0.5"><MapPinIcon className="w-3.5 h-3.5" />{p.location}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
