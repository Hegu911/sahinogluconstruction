"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80", alt: "Tikinti öncəsi" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Tikinti sonrası" },
];

export default function BeforeAfterSection() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-12 lg:py-20 border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8">
          <div className="label mb-2">Nəticə</div>
          <h2 className="heading-xl text-text-primary">Əvvəl və <span className="text-accent">sonra</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-px bg-rule">
          {images.map((img, i) => (
            <div key={img.alt} className={`bg-surface overflow-hidden transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
                <span className="text-[0.625rem] text-text-muted font-medium uppercase tracking-[0.06em]">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
