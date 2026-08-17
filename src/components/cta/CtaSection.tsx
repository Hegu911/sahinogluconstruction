"use client";

import { COMPANY } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="py-14 lg:py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="bg-accent p-8 sm:p-10 lg:p-14 rounded-2xl card-shadow-blue">
          <div className="max-w-[480px]">
            <div className="label-light mb-3">Başlayaq</div>
            <h2 className="heading-xl text-white">Arzunuzdakı evi birlikdə <span className="text-white/80">tikək</span></h2>
            <p className="text-[0.875rem] sm:text-[0.8125rem] text-white/70 mt-3 leading-relaxed">Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın. Sizinlə layihənizi müzakirə edək.</p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-white">WhatsApp yazın</a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="btn-ghost-white">Zəng edin</a>
            </div>
            <p className="text-[0.6875rem] text-white/50 mt-4">Dərhal cavab veririk · İş saatları: 09:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
