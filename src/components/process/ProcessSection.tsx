"use client";

import { PROCESS_STEPS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ProcessFoundationIcon,
  ProcessFrameIcon,
  ProcessFinishIcon,
  ProcessKeyIcon,
} from "@/components/icons/Icons";

const stepIcons = [ProcessFoundationIcon, ProcessFrameIcon, ProcessFinishIcon, ProcessKeyIcon];

const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
];

export default function ProcessSection() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-ink py-14 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-10 lg:mb-14">
          <div className="label !text-bronze-light mb-3">İş Prosesi</div>
          <h2 className="heading-xl text-paper">
            Dörd addımda
            <br />
            <span className="italic text-bronze-light">açar təhvil</span>
          </h2>
        </div>

        <div className="space-y-0">
          {PROCESS_STEPS.map((step, i) => {
            const StepIcon = stepIcons[i];
            return (
              <div
                key={step.step}
                className={`border-t border-ink-light transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">
                  <div className="lg:col-span-2 py-5 lg:py-7 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                    <span className="font-heading text-2xl lg:text-3xl text-bronze/25 font-normal">
                      {step.step}
                    </span>
                    <StepIcon className="w-4 h-4 text-bronze/50 lg:mt-1" />
                  </div>

                  <div className="lg:col-span-4 py-0 lg:py-7 lg:px-8 flex flex-col justify-center">
                    <h3 className="heading-md text-paper mb-1.5">{step.title}</h3>
                    <p className="text-[0.8125rem] text-text-muted leading-relaxed mb-1.5">
                      {step.description}
                    </p>
                    <span className="text-[0.65rem] font-medium tracking-[0.08em] uppercase text-bronze-light">
                      {step.duration}
                    </span>
                  </div>

                  <div className="lg:col-span-6 relative min-h-[140px] sm:min-h-[180px] lg:min-h-[200px] overflow-hidden">
                    <img
                      src={images[i]}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
