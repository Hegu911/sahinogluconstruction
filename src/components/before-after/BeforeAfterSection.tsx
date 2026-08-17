"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BeforeAfterSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="label mb-3">Nəticə</div>
            <h2 className="heading-xl text-ink mb-4">
              Əvvəl
              <br />
              <span className="italic text-bronze">və sonra</span>
            </h2>
            <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
              Hər layihəmizdə dramatik dəyişiklik yaradırıq. Köhnə binaya yeni həyat
              veririk, arzudakı evi gerçəkləşdiririk.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div>
                <span className="text-[0.9375rem] font-semibold text-ink block">127+ tamamlanmış</span>
                <span className="text-[0.75rem] text-text-muted">obyekt</span>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                alt="Tikinti nəticəsi"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border/60 bg-paper shadow-xl p-4">
              <span className="font-heading text-2xl text-bronze font-normal">450</span>
              <span className="block text-[0.6875rem] text-text-muted">m² villa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
