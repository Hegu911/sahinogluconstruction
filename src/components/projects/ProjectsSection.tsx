"use client";

import { PROJECTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <div className="label mb-2">Layihələr</div>
            <h2 className="heading-xl text-paper">Son <span className="italic text-bronze">tikintilərimiz</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECTS.slice(0, 3).map((project, i) => (
            <div key={project.id} className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-0.5 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="aspect-[4/3] relative">
                <img src={project.heroImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[0.5625rem] font-medium tracking-wider uppercase text-bronze/60 block mb-1">{project.location}</span>
                <h3 className="font-heading text-[0.9375rem] text-paper font-normal mb-0.5">{project.title}</h3>
                <div className="flex items-center gap-2 text-[0.625rem] text-white/30">
                  <span>{project.area} m²</span>
                  <span>·</span>
                  <span>{project.rooms} otaq</span>
                  <span>·</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
