"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-6 lg:mb-8">
          <div className="label mb-2">Rəylər</div>
          <h2 className="heading-xl text-paper">Onların <span className="italic text-bronze">sözü ilə</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`rounded-xl border border-white/5 bg-white/[0.02] p-5 flex flex-col transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-heading text-2xl text-bronze/20 leading-none mb-2 font-normal">&ldquo;</span>
              <p className="text-[0.8125rem] text-white/40 leading-relaxed mb-4 flex-1">{t.text}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <img src={t.image} alt={t.name} className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <div className="text-[0.75rem] font-medium text-paper/60">{t.name}</div>
                  <div className="text-[0.625rem] text-white/20">{t.projectTitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
