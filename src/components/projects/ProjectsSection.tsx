"use client";

import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, MapPinIcon } from "@/components/icons/Icons";

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.05);
  const featured = PROJECTS.slice(0, 3);

  return (
    <section ref={ref} className="py-14 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-14">
          <div>
            <div className="label mb-3">Layihələr</div>
            <h2 className="heading-xl text-ink">
              Seçilmiş
              <br />
              <span className="italic text-bronze">obyektlər</span>
            </h2>
          </div>
          <Link
            href="/layiheler"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-bronze hover:gap-2.5 transition-all"
          >
            Bütün layihələr
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {featured.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <Link
              key={project.id}
              href={`/layiheler/${project.id}`}
              className={`group block transition-all duration-700 mb-8 lg:mb-14 last:mb-0 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div
                  className={`${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                  } relative min-h-[220px] sm:min-h-[280px] lg:min-h-[380px] overflow-hidden`}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div
                  className={`${
                    isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                  } flex flex-col justify-center py-6 lg:py-10 ${
                    isEven ? "lg:pl-10" : "lg:pr-10"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-text-muted text-[0.65rem] mb-2 lg:mb-3">
                    <MapPinIcon className="w-3 h-3" />
                    {project.location}
                  </div>
                  <h3 className="heading-md lg:heading-lg text-ink mb-2 lg:mb-3 group-hover:text-bronze transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="body-sm mb-4 lg:mb-5 max-w-[320px] text-[0.8125rem]">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 lg:gap-5 text-[0.6875rem] font-medium text-text-muted">
                    <span>{project.area} m²</span>
                    <span className="w-[1px] h-3 bg-border" />
                    <span>{project.rooms} otaq</span>
                    <span className="w-[1px] h-3 bg-border" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
