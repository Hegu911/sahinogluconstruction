"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8 lg:mb-12">
          <div className="label mb-3">Rəylər</div>
          <h2 className="heading-xl text-ink">
            Onların
            <br />
            <span className="italic text-bronze">sözü ilə</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-paper/40 backdrop-blur-sm p-6 lg:p-8 flex flex-col transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-heading text-3xl text-bronze/15 leading-none mb-3 font-normal">
                &ldquo;
              </div>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-6 flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-2.5 pt-5 border-t border-border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-[0.8125rem] font-medium text-ink">{t.name}</div>
                  <div className="text-[0.6875rem] text-text-muted">{t.projectTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
