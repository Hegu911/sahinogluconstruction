"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProcessSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const steps = [
    { num: "01", title: "Bünövrə", desc: "Layihələndirmə və bünövrə tökmə", time: "1-2 ay" },
    { num: "02", title: "Konstruksiya", desc: "Skelet, divar, dam", time: "3-5 ay" },
    { num: "03", title: "Bitirmə", desc: "Daxili təmir, fasad", time: "2-4 ay" },
    { num: "04", title: "Açar Təhvil", desc: "Yekun yoxlama və təhvil", time: "1 həftə" },
  ];

  return (
    <section ref={ref} className="py-12 lg:py-20 bg-ink-light">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8 lg:mb-10">
          <div className="label mb-2">İş Prosesi</div>
          <h2 className="heading-xl text-paper">Dörd addımda <span className="italic text-bronze">açar təhvil</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <div key={s.num} className={`rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.05] transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-heading text-xl text-bronze/30 font-normal block mb-2">{s.num}</span>
              <h3 className="font-heading text-[0.9375rem] text-paper font-normal mb-1">{s.title}</h3>
              <p className="text-[0.75rem] text-white/30 mb-2">{s.desc}</p>
              <span className="text-[0.5625rem] font-medium tracking-wider uppercase text-bronze/50">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
