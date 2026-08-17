"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function HeroSection() {
  const wa = COMPANY.whatsapp;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-bronze/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-bronze/10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-paper/60 backdrop-blur-sm px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-wide uppercase text-text-secondary">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-bronze" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Bakı, Azərbaycan
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight font-extrabold text-ink font-heading">
              Bünövrədən
              <br />
              <span className="relative inline-block text-bronze italic">
                açar
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-bronze/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 8 Q25 0 50 8 T100 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>{" "}
              təhvilinə
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-xl">
              Premium villa və fərdi ev tikintisi. Layihələndirmədən açar
              təhvilinə — bir komanda, tam məsuliyyət. 14 illik təcrübə, 127+ tamamlanmış obyekt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="text-[0.75rem] font-semibold text-ink">14+ il</span>
                </div>
                <span className="text-[0.65rem] text-text-muted">Təcrübə</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                  </svg>
                  <span className="text-[0.75rem] font-semibold text-ink">127+</span>
                </div>
                <span className="text-[0.65rem] text-text-muted">Tamamlanmış</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <span className="text-[0.75rem] font-semibold text-ink">96%</span>
                </div>
                <span className="text-[0.65rem] text-text-muted">Məmnunluq</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-bronze/15 to-bronze/5 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/40 bg-card shadow-2xl shadow-bronze/10">
                <img
                  src="/image.png"
                  alt="Şahinoğlu Construction"
                  className="w-full h-auto object-cover min-h-[300px] lg:min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-border/40 bg-paper/90 backdrop-blur-md p-3 shadow-lg">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[0.8125rem] font-semibold text-ink block">Açar Təhvil</span>
                    <span className="text-[0.6875rem] text-text-muted">Layihələndirmədən təhvilə qədər</span>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-8 hidden sm:flex items-center gap-2 rounded-2xl border border-border/40 bg-paper/90 backdrop-blur-md px-3.5 py-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
                <span className="text-[0.6875rem] font-semibold text-ink">14+ il təcrübə</span>
              </div>
              <div className="absolute -bottom-5 -right-2 hidden sm:flex items-center gap-2 rounded-2xl border border-border/40 bg-paper/90 backdrop-blur-md px-3.5 py-2 shadow-xl">
                <svg className="w-4 h-4 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="text-[0.6875rem] font-semibold text-ink">127+ obyekt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
