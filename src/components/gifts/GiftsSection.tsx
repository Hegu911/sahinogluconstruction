"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GiftDraftIcon, GiftCalcIcon, GiftHeatIcon, GiftHomeIcon } from "@/components/icons/Icons";

const gifts = [
  { Icon: GiftDraftIcon, num: "01", title: "Layihə Hədiyyə", description: "Fərdi ev layihələndirməsi pulsuz — arzunuzdakı evi birlikdə dizayn edək." },
  { Icon: GiftCalcIcon, num: "02", title: "Smeta Hədiyyə", description: "Dəqiq smeta hesablaması — tam şəffaf qiymət, gözlənilməz xərc yox." },
  { Icon: GiftHeatIcon, num: "03", title: "Kombi Bizdən", description: "İstilik sistemi + kombi + quraşdırma — evinizin isti sistemi hədiyyə." },
  { Icon: GiftHomeIcon, num: "04", title: "Açar Hazır Evlər", description: "Hazır villa və evlərimiz — seçin, daxil olun. Gözləməyə ehtiyac yox." },
];

export default function GiftsSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="label mb-2">Xüsusi Təkliflər</div>
            <h2 className="heading-xl text-text-primary">Hədiyyələr</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-px lg:bg-rule">
          {gifts.map((card, i) => (
            <div key={card.title} className={`bg-surface p-5 sm:p-6 card-shadow rounded-xl transition-all duration-300 hover:card-shadow-hover lg:rounded-none lg:card-shadow-none lg:bg-surface ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-2.5 mb-3">
                <card.Icon className="w-5 h-5 text-accent" />
                <span className="text-[0.625rem] text-text-muted font-medium">{card.num}</span>
              </div>
              <h3 className="font-heading text-[1rem] sm:text-[0.9375rem] text-text-primary mb-1.5">{card.title}</h3>
              <p className="text-[0.8125rem] sm:text-[0.75rem] text-text-secondary leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
