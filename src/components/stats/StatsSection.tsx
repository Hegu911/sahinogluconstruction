"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { num: "14+", label: "İl təcrübə" },
  { num: "127+", label: "Tamamlanmış obyekt" },
  { num: "48 500", label: "m² tikinti sahəsi" },
  { num: "96%", label: "Müştəri məmnunluğu" },
];

export default function StatsSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-10 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, i) => (
            <div key={item.label} className={`text-center transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-heading text-2xl lg:text-3xl text-bronze font-normal block">{item.num}</span>
              <span className="text-[0.6875rem] text-white/30 mt-1 block">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
