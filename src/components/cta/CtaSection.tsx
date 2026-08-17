"use client";

import { COMPANY } from "@/lib/data";

export default function CtaSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="bg-surface-light p-8 lg:p-12 border border-rule">
          <div className="max-w-[480px]">
            <div className="label mb-3">Başlayaq</div>
            <h2 className="heading-xl text-text-primary">Arzunuzdakı evi birlikdə <span className="text-accent">tikək</span></h2>
            <p className="text-[0.8125rem] text-text-secondary mt-3">Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın. Sizinlə layihənizi müzakirə edək.</p>
            <div className="flex gap-2.5 mt-6">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp yazın</a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="btn-secondary">Zəng edin</a>
            </div>
            <p className="text-[0.625rem] text-text-muted mt-4">Dərhal cavab veririk · İş saatları: 09:00 – 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
