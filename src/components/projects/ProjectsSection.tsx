"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-surface-blue">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="label-light mb-2">Layihələr</div>
            <h2 className="heading-xl text-white">Son tamamlanmış</h2>
          </div>
          <Link href="/layiheler" className="text-[0.75rem] sm:text-[0.6875rem] font-medium text-text-muted-blue hover:text-white transition-colors hidden sm:block">Hamısı →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-px lg:bg-rule-blue">
          {PROJECTS.map((project, i) => (
            <Link key={project.id} href={`/layiheler/${project.id}`} className={`group bg-surface-blue card-shadow-blue rounded-xl lg:rounded-none transition-all hover:card-shadow-hover ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[0.625rem] text-text-muted-blue">{project.year}</span>
                  <span className="text-text-muted-blue text-[0.375rem]">•</span>
                  <span className="text-[0.625rem] text-text-muted-blue">{project.area} m²</span>
                </div>
                <h3 className="font-heading text-[0.9375rem] sm:text-[0.8125rem] text-white group-hover:text-accent-light transition-colors">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
