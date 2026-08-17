"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-14 lg:py-24 bg-ink">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <div className="label mb-3">Layihələr</div>
            <h2 className="heading-xl text-paper">
              Son
              <br />
              <span className="italic text-bronze">tikintilərimiz</span>
            </h2>
          </div>
          <Link href="/layiheler" className="hidden sm:inline-flex items-center gap-1.5 text-[0.75rem] font-medium tracking-wide uppercase text-paper/30 hover:text-bronze transition-colors">
            Hamısına bax
            <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M10 4l3 4-3 4" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.slice(0, 3).map((project, i) => (
            <Link
              key={project.id}
              href={`/layiheler/${project.id}`}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[0.625rem] font-medium tracking-[0.08em] uppercase text-bronze/60 mb-1 block">
                  {project.location}
                </span>
                <h3 className="font-heading text-lg text-paper font-normal mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-[0.6875rem] text-paper/30">
                  <span>{project.area} m²</span>
                  <span>·</span>
                  <span>{project.rooms} otaq</span>
                  <span>·</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link href="/layiheler" className="btn-ghost !border-paper/10 !text-paper/40">
            Hamısına bax
          </Link>
        </div>
      </div>
    </section>
  );
}
