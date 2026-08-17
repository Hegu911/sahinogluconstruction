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
    <section ref={ref} className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-6 lg:mb-8">
          <div>
            <div className="label mb-2">Xüsusi Təkliflər</div>
            <h2 className="heading-xl text-paper">Hədiyyələr</h2>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 lg:overflow-visible">
          {gifts.map((card, i) => (
            <div key={card.title} className={`shrink-0 w-[240px] sm:w-auto sm:flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-bronze/10 flex items-center justify-center"><card.Icon className="w-3.5 h-3.5 text-bronze" /></div>
                <span className="text-[0.5625rem] text-white/20 font-medium">{card.num}</span>
              </div>
              <h3 className="font-heading text-[0.9375rem] text-paper mb-1.5 font-normal">{card.title}</h3>
              <p className="text-[0.75rem] text-white/30 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
