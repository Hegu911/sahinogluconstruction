"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cardBg = [
  "bg-ink/70 backdrop-blur-sm border-ink-light/30",
  "bg-paper/50 backdrop-blur-sm border-border/50",
  "bg-ink/70 backdrop-blur-sm border-ink-light/30",
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, i) => {
            const isDark = i % 2 === 0;
            return (
              <div
                key={t.name}
                className={`border p-6 lg:p-8 flex flex-col transition-all duration-700 rounded-[1px] ${cardBg[i]} ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`font-heading text-3xl leading-none mb-3 font-normal ${isDark ? "text-bronze/30" : "text-bronze/15"}`}>
                  &ldquo;
                </div>
                <p className={`text-[0.8125rem] leading-relaxed mb-6 flex-1 ${isDark ? "text-paper/70" : "text-text-secondary"}`}>
                  {t.text}
                </p>
                <div className={`flex items-center gap-2.5 pt-5 border-t ${isDark ? "border-ink-light/30" : "border-border/50"}`}>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className={`text-[0.8125rem] font-medium ${isDark ? "text-paper" : "text-ink"}`}>{t.name}</div>
                    <div className={`text-[0.6875rem] ${isDark ? "text-paper/40" : "text-text-muted"}`}>{t.projectTitle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
