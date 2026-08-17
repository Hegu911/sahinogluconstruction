"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-28 pb-10 lg:pt-24 lg:pb-0">
      <div className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-12">

          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="label">Tikinti · Layihələndirmə · Təmir</span>
            <h1 className="heading-display text-text-primary mt-3">
              Arzularınızın<br />
              <span className="text-accent">memarıyıq</span>
            </h1>
            <p className="text-[0.8125rem] text-text-secondary mt-4 max-w-[320px] leading-relaxed">
              14 ildir Bakı və Abşeronda premium evlər tikirik. Hər layihə bizim imzamızdır.
            </p>
            <div className="flex gap-2.5 mt-6">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">Konsultasiya al</a>
              <Link href="/layiheler" className="btn-secondary">Layihələr</Link>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10 pt-8 border-t border-rule">
              <div>
                <span className="font-heading text-lg text-accent">14+</span>
                <span className="block text-[0.5625rem] text-text-muted mt-0.5">İl təcrübə</span>
              </div>
              <div>
                <span className="font-heading text-lg text-accent">127</span>
                <span className="block text-[0.5625rem] text-text-muted mt-0.5">Tamamlanmış</span>
              </div>
              <div>
                <span className="font-heading text-lg text-accent">96%</span>
                <span className="block text-[0.5625rem] text-text-muted mt-0.5">Məmnunluq</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <img
              src="/image.png"
              alt="Şahinoğlu Construction"
              className="w-full h-[260px] lg:h-[420px] object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
