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
        <main className="pt-16 lg:pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center px-5">
            <h1 className="heading-lg text-text-primary mb-4">Xidmət tapılmadı</h1>
            <Link href="/xidmetler" className="btn-ghost">Qayıt</Link>
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
        <section className="py-10 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
            <nav className="flex items-center gap-1.5 text-[0.65rem] text-text-muted mb-8 lg:mb-12">
              <Link href="/" className="hover:text-accent transition-colors">Ana Səhifə</Link>
              <span>/</span>
              <Link href="/xidmetler" className="hover:text-accent transition-colors">Xidmətlər</Link>
              <span>/</span>
              <span className="text-text-secondary">{service.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="label mb-3">{service.title}</div>
                <h1 className="heading-xl text-text-primary mb-6">{service.title}</h1>
                <p className="body-sm text-text-secondary mb-8 max-w-[520px]">{service.fullDescription}</p>

                <div className="w-full h-px bg-rule mb-8" />

                <h3 className="heading-md text-text-primary mb-4">Xidmətə daxildir</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 py-2.5 border-b border-rule">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      <span className="text-[0.8125rem] text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-fill">Əlaqə saxla</a>
                  <a href="tel:+994705552726" className="btn-ghost">Zəng Et</a>
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="sticky top-20 space-y-6">
                  <div className="py-6 border-t border-rule">
                    <div className="label mb-4">Zəmanət</div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <ShieldIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[0.8125rem] font-medium text-text-primary">10 il struktur zəmanəti</div>
                          <div className="text-[0.6875rem] text-text-muted mt-0.5">Bünövrə və konstruksiya</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CalendarIcon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[0.8125rem] font-medium text-text-primary">3 il tam təmir zəmanəti</div>
                          <div className="text-[0.6875rem] text-text-muted mt-0.5">Daxili bitirmə işləri</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {relatedProjects.length > 0 && (
                    <div className="py-6 border-t border-rule">
                      <div className="label mb-4">Əlaqəli Layihələr</div>
                      <div className="space-y-3">
                        {relatedProjects.map((p) => (
                          <Link key={p.id} href={`/layiheler/${p.id}`} className="flex items-center gap-3 group">
                            <img src={p.heroImage} alt={p.title} className="w-14 h-10 object-cover rounded-lg shrink-0" />
                            <div>
                              <div className="text-[0.8125rem] font-medium text-text-primary group-hover:text-accent transition-colors">{p.title}</div>
                              <div className="flex items-center gap-1 text-[0.65rem] text-text-muted mt-0.5">
                                <MapPinIcon className="w-2.5 h-2.5" />{p.location}
                              </div>
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
