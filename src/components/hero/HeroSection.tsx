"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function HeroSection() {
  const wa = COMPANY.whatsapp;

  return (
    <section className="min-h-[100dvh] flex flex-col">
      <div className="flex-1 relative flex items-end">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80"
          alt="Premium villa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
          <img
            src="/image.png"
            alt=""
            className="w-[70vw] max-w-[600px] h-auto"
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pb-8 lg:pb-16 pt-24 lg:pt-36">
            <div className="max-w-[560px]">
              <div className="label !text-bronze-light mb-3 lg:mb-5">Tikinti · Layihələndirmə · Təmir</div>
              <h1 className="heading-display text-paper mb-4 lg:mb-6">
                Bünövrədən
                <br />
                <span className="text-bronze italic">açar</span>
                <br />
                təhvilinə
              </h1>
              <p className="body-lg !text-paper/80 max-w-[380px] mb-6 lg:mb-8">
                Premium villa və fərdi ev tikintisi. Layihələndirmədən açar
                təhvilinə — bir komanda, tam məsuliyyət.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-fill">
                  Əlaqə saxla
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                    <path d="M13.6 2.3A7.8 7.8 0 001.4 14.5L0 16l1.6-.4A7.8 7.8 0 0013.6 2.3zm-1.2 1.1A6.4 6.4 0 012.5 12.8l-.7.2.3-.8a6.4 6.4 0 019.9-7.6l.2.4-.8.3zM5.7 4.7c.1 0 .3 0 .5.1.2 0 .4.1.5.3l.5.9c0 .1 0 .2-.1.4l-.4.4c.2.4.5.8.8 1.1l.4-.4c.2-.1.3-.1.4 0l.9.5c.2.1.3.3.3.5 0 .2.1.5.1.7A5.3 5.3 0 014 10.2c.2-1.6.9-3 1.8-4.1.1-.2.2-.4.3-.5.1-.1.2-.2.2-.3 0-.1.1-.3.1-.3z"/>
                  </svg>
                </a>
                <Link href="/layiheler" className="btn-ghost-light">
                  Layihələrə bax
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 sm:px-8 lg:px-10 mb-14 lg:mb-0 bg-paper">
        <div className="max-w-[1400px] mx-auto py-5 lg:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 lg:gap-10">
            {[
              { value: `${COMPANY.yearsExperience}`, label: "il təcrübə" },
              { value: `${COMPANY.completedProjects}+`, label: "obyekt" },
              { value: "48 500", label: "m² tikilib" },
              { value: `${COMPANY.happyClients}%`, label: "məmnunluq" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-baseline gap-1.5 justify-center lg:justify-start">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl text-ink font-normal">
                  {stat.value}
                </span>
                <span className="text-[0.6rem] sm:text-[0.65rem] tracking-wide uppercase text-text-muted">
                  {stat.label}
                </span>
                {i < 3 && (
                  <span className="hidden sm:block lg:hidden w-[1px] h-4 bg-border ml-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
