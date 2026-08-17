"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldIcon, CalendarIcon, BuildingIcon, StatsBuildingIcon, StatsAreaIcon, StatsPeopleIcon } from "@/components/icons/Icons";

const milestones = [
  { year: "2010", title: "Təsis", text: "Şahinoğlu Construction Bakıda təsis edildi.", Icon: BuildingIcon },
  { year: "2015", title: "Genişlənmə", text: "Layihələr portfeli 50+ obyektə çatdı.", Icon: StatsBuildingIcon },
  { year: "2020", title: "Premium seqment", text: "Quba-Qusar bölgəsində premium villa layihələrinə başlandı.", Icon: StatsAreaIcon },
  { year: "2024", title: "Bu gün", text: "127+ tamamlanmış obyekt, 48500+ m² tikinti sahəsi.", Icon: StatsPeopleIcon },
];

export default function AboutPage() {
  const { ref: msRef, visible: msVisible } = useScrollReveal(0.1);
  const { ref: certRef, visible: certVisible } = useScrollReveal(0.15);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-10 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-6">
                <div className="label mb-3">Haqqımızda</div>
                <h1 className="heading-xl text-text-primary mb-5">
                  Keyfiyyətimiz<br /><span className="italic text-accent">gələcəyinizdir</span>
                </h1>
                <div className="space-y-3">
                  <p className="body-sm text-text-secondary">Şahinoğlu Construction 2010-cu ildən Bakı və Abşeron bölgəsində premium tikinti xidmətləri göstərir.</p>
                  <p className="body-sm text-text-secondary">Biz yalnız bina tikmirik — arzularınıza məkan yaradırıq.</p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80" alt="Tikinti prosesi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={msRef} className="bg-surface-light py-14 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="heading-xl text-text-primary mb-10 lg:mb-14">
              Yol<br /><span className="italic text-accent">xəritəmiz</span>
            </h2>
            <div>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-5 lg:py-6 border-t border-rule transition-all duration-700 ${
                    msVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="sm:col-span-2 flex items-center gap-2">
                    <m.Icon className="w-4 h-4 text-accent/40" />
                    <span className="font-heading text-xl lg:text-2xl text-accent font-normal">{m.year}</span>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="heading-md text-text-primary">{m.title}</h3>
                  </div>
                  <div className="sm:col-span-6 sm:col-start-7">
                    <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={certRef} className="py-14 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="heading-xl text-text-primary mb-10 lg:mb-12">
              Niyə<br /><span className="italic text-accent">biz?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { Icon: ShieldIcon, title: "Zəmanət", text: "10 il struktur, 3 il təmir zəmanəti." },
                { Icon: CalendarIcon, title: "Vaxtında", text: "Müqavilə müddətlərinə 100% əməl." },
                { Icon: BuildingIcon, title: "Təcrübə", text: "14 il, 127+ obyekt." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-rule bg-surface-lighter/50 p-6 lg:p-8 transition-all duration-700 ${
                    certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <item.Icon className="w-5 h-5 text-accent mb-4" />
                  <h3 className="heading-md text-text-primary mb-2">{item.title}</h3>
                  <p className="body-sm text-[0.8125rem] text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
