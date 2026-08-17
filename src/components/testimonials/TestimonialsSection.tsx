"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-24 bg-ink">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8 lg:mb-12">
          <div className="label mb-3">Rəylər</div>
          <h2 className="heading-xl text-paper">
            Onların
            <br />
            <span className="italic text-bronze">sözü ilə</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl border border-paper/5 bg-paper/[0.02] p-6 lg:p-8 flex flex-col transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-heading text-3xl text-bronze/20 leading-none mb-3 font-normal">
                &ldquo;
              </div>
              <p className="text-[0.8125rem] text-paper/40 leading-relaxed mb-6 flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-2.5 pt-5 border-t border-paper/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-[0.8125rem] font-medium text-paper/70">{t.name}</div>
                  <div className="text-[0.6875rem] text-paper/25">{t.projectTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
