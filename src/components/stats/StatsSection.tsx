"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { num: "14+", label: "İl təcrübə" },
  { num: "127", label: "Tamamlanmış obyekt" },
  { num: "48 500", label: "m² tikinti sahəsi" },
  { num: "96%", label: "Müştəri məmnunluğu" },
];

export default function StatsSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="bg-surface-blue py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-rule-blue gap-6 lg:gap-0">
          {stats.map((item, i) => (
            <div key={item.label} className={`text-center transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-heading text-2xl sm:text-xl lg:text-2xl text-white block">{item.num}</span>
              <span className="text-[0.6875rem] sm:text-[0.625rem] text-text-muted-blue mt-1 block">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
