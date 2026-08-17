"use client";

import { useState, useRef, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BeforeAfterSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section ref={ref} className="bg-ink/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`px-5 sm:px-8 lg:px-10 py-10 lg:py-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end mb-6 lg:mb-10">
            <div className="lg:col-span-6">
              <div className="label !text-bronze-light mb-3">Əvvəl / Sonra</div>
              <h2 className="heading-xl text-paper">
                Nəticəni
                <br />
                <span className="italic text-bronze-light">özünüz görün</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="body-sm !text-text-muted text-[0.8125rem]">
                Sürüşdürün və tikintinin əvvəlki və sonrakı halını müqayisə edin.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] max-h-[400px] sm:max-h-[480px] lg:max-h-[520px] cursor-col-resize select-none mx-0"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80"
            alt="Sonra — tamamlanmış villa"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
              alt="Əvvəl — tikinti prosesi"
              className="absolute top-0 left-0 h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth || "100vw" }}
              draggable={false}
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-[1px] bg-bronze z-10"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-bronze bg-paper flex items-center justify-center">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-bronze" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 8l-2 0M14 8l2 0M4 8l2-2M4 8l2 2M14 8l-2-2M14 8l-2 2" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2">
            <span className="px-2 py-1 bg-ink/70 text-[0.55rem] sm:text-[0.6rem] font-medium tracking-[0.1em] uppercase text-paper rounded-[1px]">
              Əvvəl
            </span>
            <span className="px-2 py-1 bg-ink/70 text-[0.55rem] sm:text-[0.6rem] font-medium tracking-[0.1em] uppercase text-paper rounded-[1px]">
              Sonra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
