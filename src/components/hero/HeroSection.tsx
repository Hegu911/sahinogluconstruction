"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function HeroSection() {
  const wa = COMPANY.whatsapp;

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-light to-ink" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-bronze/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-bronze/8 blur-[100px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-24 lg:py-0">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2 min-h-[80dvh]">
          <div className="order-2 lg:order-1">
            <span className="label animate-fade-in">Tikinti · Layihələndirmə · Təmir</span>

            <h1 className="heading-display text-paper mt-5 lg:mt-6 animate-fade-in-delay">
              Bünövrədən
              <br />
              <span className="text-bronze italic">açar</span>
              <br />
              təhvilinə
            </h1>

            <p className="text-[0.9375rem] leading-relaxed text-paper/50 max-w-[420px] mt-6 lg:mt-8 animate-fade-in-delay">
              Premium villa və fərdi ev tikintisi. Layihələndirmədən açar
              təhvilinə — bir komanda, tam məsuliyyət.
            </p>

            <div className="flex flex-wrap gap-3 mt-8 lg:mt-10 animate-fade-in-delay-2">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-fill">
                Əlaqə saxla
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                  <path d="M13.6 2.3A7.8 7.8 0 001.4 14.5L0 16l1.6-.4A7.8 7.8 0 0013.6 2.3zm-1.2 1.1A6.4 6.4 0 012.5 12.8l-.7.2.3-.8a6.4 6.4 0 019.9-7.6l.2.4-.8.3zM5.7 4.7c.1 0 .3 0 .5.1.2 0 .4.1.5.3l.5.9c0 .1 0 .2-.1.4l-.4.4c.2.4.5.8.8 1.1l.4-.4c.2-.1.3-.1.4 0l.9.5c.2.1.3.3.3.5 0 .2.1.5.1.7A5.3 5.3 0 014 10.2c.2-1.6.9-3 1.8-4.1.1-.2.2-.4.3-.5.1-.1.2-.2.2-.3 0-.1.1-.3.1-.3z"/>
                </svg>
              </a>
              <Link href="/layiheler" className="btn-ghost">
                Layihələrə bax
              </Link>
            </div>

            <div className="flex items-center gap-8 lg:gap-10 mt-12 lg:mt-16 pt-8 border-t border-paper/10 animate-fade-in-delay-2">
              <div>
                <span className="font-heading text-3xl lg:text-4xl text-bronze font-normal">14+</span>
                <span className="block text-[0.6875rem] text-paper/30 mt-1">İl təcrübə</span>
              </div>
              <div className="w-px h-10 bg-paper/10" />
              <div>
                <span className="font-heading text-3xl lg:text-4xl text-bronze font-normal">127+</span>
                <span className="block text-[0.6875rem] text-paper/30 mt-1">Tamamlanmış</span>
              </div>
              <div className="w-px h-10 bg-paper/10" />
              <div>
                <span className="font-heading text-3xl lg:text-4xl text-bronze font-normal">96%</span>
                <span className="block text-[0.6875rem] text-paper/30 mt-1">Məmnunluq</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-bronze/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-paper/10 shadow-2xl">
                <img
                  src="/image.png"
                  alt="Şahinoğlu Construction"
                  className="w-full object-cover min-h-[350px] lg:min-h-[550px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -left-3 top-1/4 hidden lg:flex items-center gap-2.5 rounded-full border border-paper/10 bg-ink/80 backdrop-blur-xl px-4 py-2.5 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
                <span className="text-[0.6875rem] font-medium text-paper/80">14+ il təcrübə</span>
              </div>
              <div className="absolute -right-3 bottom-1/4 hidden lg:flex items-center gap-2.5 rounded-full border border-paper/10 bg-ink/80 backdrop-blur-xl px-4 py-2.5 shadow-xl">
                <svg className="w-3.5 h-3.5 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="text-[0.6875rem] font-medium text-paper/80">127+ obyekt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
