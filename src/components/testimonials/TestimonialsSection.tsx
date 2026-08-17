"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Orxan Hüseynov", role: "Villa sahibi, Abşeron", text: "Gözləntilərimizi tam üstələdi. Hər mərhələdə məlumatlandırdılar. Keyfiyyət əladir.", avatar: "OH" },
  { name: "Leyla Əliyeva", role: "Ev sahibi, Bakı", text: "Büdcəyə riayət etdilər, vaxtında təhvil verdilər. Təkrar müraciət edərdim.", avatar: "LƏ" },
  { name: "Murad Əhmədov", role: "Villa sahibi, Masazır", text: "Peşəkar komanda, keyfiyyətli material. Nəticədən çox məmnunam.", avatar: "MƏ" },
];

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8">
          <div className="label mb-2">Rəylər</div>
          <h2 className="heading-xl text-text-primary">Müştərilərimiz <span className="text-accent">deyir</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-px lg:bg-rule">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`bg-surface p-5 sm:p-6 card-shadow rounded-xl transition-all duration-300 lg:rounded-none lg:card-shadow-none lg:bg-surface ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="text-[0.875rem] sm:text-[0.8125rem] text-text-secondary leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/10 flex items-center justify-center text-[0.625rem] font-semibold text-accent rounded-full">{t.avatar}</div>
                <div>
                  <div className="text-[0.8125rem] font-medium text-text-primary">{t.name}</div>
                  <div className="text-[0.6875rem] text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
