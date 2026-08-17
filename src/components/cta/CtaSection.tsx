"use client";

import { COMPANY } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="py-12 lg:py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="bg-accent p-8 lg:p-12">
          <div className="max-w-[480px]">
            <div className="text-[0.625rem] font-medium tracking-[0.1em] uppercase text-white/60 mb-3">Başlayaq</div>
            <h2 className="heading-xl text-white">Arzunuzdakı evi birlikdə <span className="text-white/80">tikək</span></h2>
            <p className="text-[0.8125rem] text-white/70 mt-3">Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın. Sizinlə layihənizi müzakirə edək.</p>
            <div className="flex gap-2.5 mt-6">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-accent font-semibold text-[0.75rem] tracking-[0.04em] uppercase border-none cursor-pointer hover:bg-white/90 transition-colors no-underline">WhatsApp yazın</a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-white font-medium text-[0.75rem] tracking-[0.04em] uppercase border border-white/30 cursor-pointer hover:border-white transition-colors no-underline">Zəng edin</a>
            </div>
            <p className="text-[0.625rem] text-white/50 mt-4">Dərhal cavab veririk · İş saatları: 09:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
