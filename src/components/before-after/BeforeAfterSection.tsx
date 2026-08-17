"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BeforeAfterSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <div className="label mb-2">Nəticə</div>
            <h2 className="heading-xl text-paper mb-3">Əvvəl <span className="italic text-bronze">və sonra</span></h2>
            <p className="text-[0.8125rem] text-white/35 leading-relaxed mb-5">Hər layihəmizdə dramatik dəyişiklik yaradırıq. 127+ tamamlanmış obyekt.</p>
          </div>
          <div className={`rounded-xl overflow-hidden transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" alt="Nəticə" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
