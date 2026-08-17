"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CtaSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className={`max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="rounded-2xl bg-ink-light border border-white/5 p-8 lg:p-12">
          <div className="max-w-[480px]">
            <div className="label mb-3">Başlayın</div>
            <h2 className="heading-xl text-paper mb-3">Evinizi bizimlə <span className="italic text-bronze">tikin</span></h2>
            <p className="text-[0.8125rem] text-white/35 mb-6">Pulsuz konsultasiya və smeta üçün bizimlə əlaqə saxlayın.</p>
            <div className="flex flex-wrap gap-2.5">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-fill">Əlaqə saxla</a>
              <Link href="/elaqe" className="btn-ghost !border-white/10 !text-white/40 hover:!bg-white/5">Form Göndər</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
