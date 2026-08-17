"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  GiftDraftIcon,
  GiftCalcIcon,
  GiftHeatIcon,
  GiftHomeIcon,
} from "@/components/icons/Icons";

const gifts = [
  { Icon: GiftDraftIcon, num: "01", title: "Layihə Hədiyyə", description: "Fərdi ev layihələndirməsi pulsuz — arzunuzdakı evi birlikdə dizayn edək.", dark: false },
  { Icon: GiftCalcIcon, num: "02", title: "Smeta Hədiyyə", description: "Dəqiq smeta hesablaması — tam şəffaf qiymət, gözlənilməz xərc yox.", dark: true },
  { Icon: GiftHeatIcon, num: "03", title: "Kombi Bizdən", description: "İstilik sistemi + kombi + quraşdırma — evinizin isti sistemi hədiyyə.", dark: false },
  { Icon: GiftHomeIcon, num: "04", title: "Açar Hazır Evlər", description: "Hazır villa və evlərimiz — seçin, daxil olun. Gözləməyə ehtiyac yox.", dark: true },
];

export default function GiftsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-10 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-6 lg:mb-10">
          <div className="label mb-2">Xüsusi Təkliflər</div>
          <h2 className="heading-lg text-ink">Hədiyyələr</h2>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 lg:overflow-visible">
          {gifts.map((card, i) => (
            <div
              key={card.title}
              className={`shrink-0 w-[260px] sm:w-auto sm:flex-1 p-5 lg:p-6 transition-all duration-700 ${
                card.dark
                  ? "bg-ink/70 backdrop-blur-sm text-paper border border-ink-light/30"
                  : "bg-paper/50 backdrop-blur-sm text-ink border border-border/50"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <card.Icon className={`w-4 h-4 ${card.dark ? "text-bronze-light" : "text-bronze"}`} />
                <span className={`font-heading text-[0.65rem] font-normal ${card.dark ? "text-paper/40" : "text-text-muted"}`}>{card.num}</span>
              </div>
              <h3 className={`font-heading text-sm lg:text-base mb-2 font-normal ${card.dark ? "text-paper" : "text-ink"}`}>{card.title}</h3>
              <p className={`text-[0.75rem] leading-relaxed ${card.dark ? "text-paper/60" : "text-text-secondary"}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
