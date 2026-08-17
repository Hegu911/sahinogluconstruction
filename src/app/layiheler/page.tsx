"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPinIcon } from "@/components/icons/Icons";

const CATEGORIES = [
  { slug: "all", label: "Bütün" },
  { slug: "ferdi-ev", label: "Fərdi Ev" },
  { slug: "villa", label: "Villa" },
  { slug: "renovasiya", label: "Renovasiya" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const { ref, visible } = useScrollReveal(0.05);
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-10 lg:py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mb-8 lg:mb-12">
              <div className="lg:col-span-8">
                <div className="label mb-3">Layihələr</div>
                <h1 className="heading-xl text-text-primary">Tamamlanmış<br /><span className="italic text-accent">obyektlər</span></h1>
              </div>
              <div className="lg:col-span-4 flex items-end">
                <p className="text-[0.875rem] text-text-secondary">Hər layihənin öz hekayəsi var.</p>
              </div>
            </div>
            <div className="flex gap-1.5 mb-8 lg:mb-10 overflow-x-auto pb-1">
              {CATEGORIES.map((cat) => (
                <button key={cat.slug} onClick={() => setActive(cat.slug)} className={`px-4 py-2 text-[0.75rem] font-medium tracking-[0.06em] uppercase border rounded-full transition-all shrink-0 ${active === cat.slug ? "bg-accent text-white border-accent" : "bg-transparent text-text-muted border-rule hover:border-text-muted"}`}>{cat.label}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10 lg:pb-20 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {filtered.map((project, i) => (
                <Link key={project.id} href={`/layiheler/${project.id}`} className={`group block rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-700 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                      <div className="flex items-center gap-1 text-white/70 text-[0.625rem] mb-1.5"><MapPinIcon className="w-3.5 h-3.5" />{project.location}</div>
                      <h2 className="font-heading text-[1rem] text-white mb-1">{project.title}</h2>
                      <div className="flex items-center gap-2 text-[0.6875rem] text-white/50">
                        <span>{project.area} m²</span>
                        <span className="w-[1px] h-2.5 bg-white/30" />
                        <span>{project.rooms} otaq</span>
                        <span className="w-[1px] h-2.5 bg-white/30" />
                        <span>{project.year}</span>
                      </div>
                    </div>
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
