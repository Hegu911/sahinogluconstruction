"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CtaSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-14 lg:py-24">
      <div
        className={`max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="max-w-[560px]">
          <div className="label mb-4">Başlayın</div>
          <h2 className="heading-xl text-ink mb-4">
            Evinizi bizimlə
            <br />
            <span className="italic text-bronze">tikin</span>
          </h2>
          <p className="body-sm mb-8 max-w-[400px]">
            Pulsuz konsultasiya və smeta üçün bizimlə əlaqə saxlayın. 14 illik
            təcrübə, 127+ tamamlanmış obyekt.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-fill">
              Əlaqə saxla
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                <path d="M13.6 2.3A7.8 7.8 0 001.4 14.5L0 16l1.6-.4A7.8 7.8 0 0013.6 2.3zm-1.2 1.1A6.4 6.4 0 012.5 12.8l-.7.2.3-.8a6.4 6.4 0 019.9-7.6l.2.4-.8.3zM5.7 4.7c.1 0 .3 0 .5.1.2 0 .4.1.5.3l.5.9c0 .1 0 .2-.1.4l-.4.4c.2.4.5.8.8 1.1l.4-.4c.2-.1.3-.1.4 0l.9.5c.2.1.3.3.3.5 0 .2.1.5.1.7A5.3 5.3 0 014 10.2c.2-1.6.9-3 1.8-4.1.1-.2.2-.4.3-.5.1-.1.2-.2.2-.3 0-.1.1-.3.1-.3z"/>
              </svg>
            </a>
            <Link href="/elaqe" className="btn-ghost">
              Form Göndər
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
