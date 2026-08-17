"use client";

import { use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS, COMPANY } from "@/lib/data";
import { MapPinIcon, ArrowRight } from "@/components/icons/Icons";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-16 lg:pt-20 flex items-center justify-center min-h-screen bg-surface">
          <div className="text-center px-5">
            <h1 className="heading-lg text-text-primary mb-4">Layihə tapılmadı</h1>
            <Link href="/layiheler" className="btn-secondary">Qayıt</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="relative h-[35vh] sm:h-[40vh] lg:h-[45vh] min-h-[240px]">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-blue via-surface-blue/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 max-w-[1200px] mx-auto">
            <nav className="flex items-center gap-1.5 text-[0.625rem] text-text-muted-blue mb-3">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link><span className="text-white/30">/</span>
              <Link href="/layiheler" className="hover:text-white transition-colors">Layihələr</Link><span className="text-white/30">/</span>
              <span className="text-white/60">{project.title}</span>
            </nav>
            <div className="flex items-center gap-1 text-text-muted-blue text-[0.625rem] mb-1.5"><MapPinIcon className="w-3.5 h-3.5" />{project.location}</div>
            <h1 className="heading-xl text-white">{project.title}</h1>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-8">
                <p className="text-[0.9375rem] text-text-secondary mb-8 max-w-[520px] leading-relaxed">{project.description}</p>
                <div className="w-full h-px bg-rule mb-8" />
                <h3 className="heading-lg text-text-primary mb-4">Qalereya</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden card-shadow">
                      <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  ))}
                </div>
                <h3 className="heading-lg text-text-primary mb-4">Əvvəl / Sonra</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[4/3] rounded-xl relative overflow-hidden card-shadow">
                    <img src={project.beforeImage} alt="Əvvəl" className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-surface-blue/80 text-[0.5625rem] font-medium tracking-[0.08em] uppercase text-white rounded-lg">Əvvəl</span>
                  </div>
                  <div className="aspect-[4/3] rounded-xl relative overflow-hidden card-shadow">
                    <img src={project.afterImage} alt="Sonra" className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-surface-blue/80 text-[0.5625rem] font-medium tracking-[0.08em] uppercase text-white rounded-lg">Sonra</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <div className="bg-surface-blue p-6 rounded-xl card-shadow-blue">
                    <div className="label-light mb-4">Layihə Məlumatları</div>
                    <div className="space-y-0">
                      {[{ label: "Sahə", value: `${project.area} m²` }, { label: "Otaq", value: `${project.rooms} otaq` }, { label: "İl", value: `${project.year}` }, { label: "Müddət", value: project.duration }, { label: "Yer", value: project.location }, { label: "Növ", value: project.category === "ferdi-ev" ? "Fərdi Ev" : project.category === "villa" ? "Villa" : "Renovasiya" }].map((item) => (
                        <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-rule-blue">
                          <span className="text-[0.6875rem] font-medium text-text-muted-blue uppercase tracking-wide">{item.label}</span>
                          <span className="text-[0.875rem] font-medium text-white">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-6">Sifariş Et <ArrowRight className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
            {otherProjects.length > 0 && (
              <div className="mt-14 lg:mt-20 pt-8 lg:pt-10 border-t border-rule">
                <h3 className="heading-lg text-text-primary mb-5">Oxşar layihələr</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherProjects.map((p) => (
                    <Link key={p.id} href={`/layiheler/${p.id}`} className="group flex items-center gap-3 p-3 lg:p-4 rounded-xl bg-surface-alt hover:bg-surface hover:card-shadow transition-all">
                      <img src={p.heroImage} alt={p.title} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.875rem] font-medium text-text-primary group-hover:text-accent transition-colors truncate">{p.title}</div>
                        <div className="text-[0.6875rem] text-text-muted mt-0.5">{p.area} m² · {p.year}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
