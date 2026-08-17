"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Görüş", text: "Sizinlə görüşür, arzularınızı dinləyirik. Evinizin yerini, büdcənizi və üstünlüklərinizi müəyyənləşdiririk." },
  { num: "02", title: "Layihə", text: "Mimar heyətimiz fərdi layihə hazırlayır. 3D vizualizasiya ilə gələcək evinizi əvvəlcədən görürsünüz." },
  { num: "03", title: "Tikinti", text: "Təcrübəli komandamız yüksək keyfiyyətlə tikinti işlərini aparır. Hər mərhələdə nəzarət." },
  { num: "04", title: "Təhvil", text: "Açar təhvil — yeni evinizə daxil olursunuz. Keyfiyyət zəmanəti və after-sales dəstək." },
];

export default function ProcessSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-12 lg:py-20 border-y border-rule bg-surface-light">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8">
          <div className="label mb-2">Proses</div>
          <h2 className="heading-xl text-text-primary">Necə işləyirik</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
          {steps.map((step, i) => (
            <div key={step.num} className={`bg-surface p-5 lg:p-6 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-heading text-xl text-accent">{step.num}</span>
              <h3 className="font-heading text-[0.9375rem] text-text-primary mt-2 mb-1.5">{step.title}</h3>
              <p className="text-[0.75rem] text-text-secondary leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
