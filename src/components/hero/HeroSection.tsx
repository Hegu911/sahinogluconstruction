"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function HeroSection() {
  const wa = COMPANY.whatsapp;

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 lg:pt-20">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-bronze/5 blur-[100px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

          <div className="order-2 lg:order-1">
            <span className="label animate-fade-in">Tikinti · Layihələndirmə · Təmir</span>
            <h1 className="heading-display text-paper mt-4 animate-fade-in-delay">
              Arzularınızın<br />
              <span className="text-bronze italic">memarıyıq</span>
            </h1>
            <p className="text-[0.8125rem] text-white/40 max-w-[340px] mt-5 leading-relaxed animate-fade-in-delay">
              14 ildir Bakı və Abşeronda premium evlər tikirik. Hər layihə bizim imzamızdır.
            </p>
            <div className="flex gap-2.5 mt-6 animate-fade-in-delay-2">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-fill">
                Konsultasiya al
              </a>
              <Link href="/layiheler" className="btn-ghost">
                Layihələr
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/8 animate-fade-in-delay-2">
              <div>
                <span className="font-heading text-xl text-bronze font-normal">14+</span>
                <span className="block text-[0.5625rem] text-white/20 mt-0.5">İl təcrübə</span>
              </div>
              <div className="w-px h-7 bg-white/8" />
              <div>
                <span className="font-heading text-xl text-bronze font-normal">127+</span>
                <span className="block text-[0.5625rem] text-white/20 mt-0.5">Tamamlanmış</span>
              </div>
              <div className="w-px h-7 bg-white/8" />
              <div>
                <span className="font-heading text-xl text-bronze font-normal">96%</span>
                <span className="block text-[0.5625rem] text-white/20 mt-0.5">Məmnunluq</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-bronze/8 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-[1rem] border border-white/8 shadow-2xl">
                <img src="/image.png" alt="Şahinoğlu Construction" className="w-full object-cover h-[280px] lg:h-[400px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
