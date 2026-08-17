"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { StatsCalendarIcon, StatsBuildingIcon, StatsAreaIcon, StatsPeopleIcon } from "@/components/icons/Icons";

const stats = [
  { Icon: StatsCalendarIcon, num: "14+", label: "İl təcrübə" },
  { Icon: StatsBuildingIcon, num: "127+", label: "Tamamlanmış obyekt" },
  { Icon: StatsAreaIcon, num: "48 500", label: "m² tikinti sahəsi" },
  { Icon: StatsPeopleIcon, num: "96%", label: "Müştəri məmnunluğu" },
];

export default function StatsSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="bg-ink">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[200px] sm:min-h-[260px] lg:min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
            alt="Tikinti prosesi"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-8 lg:py-14">
          <div className="space-y-5 lg:space-y-7">
            {stats.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-3 lg:gap-4 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 mt-1">
                  <item.Icon className="w-4 h-4 text-bronze" />
                </div>
                <div className="flex items-baseline gap-2 lg:gap-3">
                  <span className="font-heading text-2xl sm:text-3xl lg:text-4xl text-bronze shrink-0 font-normal">
                    {item.num}
                  </span>
                  <span className="text-[0.75rem] sm:text-[0.8125rem] text-text-muted leading-snug">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
