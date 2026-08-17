"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, InstagramIcon } from "@/components/icons/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-10 lg:py-20 bg-surface">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="label mb-3">Əlaqə</div>
                <h1 className="heading-xl text-text-primary mb-4">Başlamaq<br /><span className="italic text-accent">üçün bir addım</span></h1>
                <p className="text-[0.9375rem] text-text-secondary max-w-[400px] mb-8 lg:mb-10">Formu doldurun və ya birbaşa WhatsApp vasitəsilə yazın.</p>

                {submitted ? (
                  <div className="py-12 text-center bg-surface-alt rounded-xl card-shadow">
                    <div className="text-accent mb-3"><svg viewBox="0 0 32 32" className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="14" /><path d="M10 16l4 4 8-8" /></svg></div>
                    <h2 className="heading-lg text-text-primary mb-2">Mesajınız göndərildi</h2>
                    <p className="text-[0.875rem] text-text-secondary">Ən qısa zamanda cavab verəcəyik.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-[440px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-1.5">Adınız</label>
                        <input type="text" required className="w-full px-3.5 py-3 bg-surface-alt border border-rule text-text-primary text-[0.875rem] rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all card-shadow" placeholder="Adınız" />
                      </div>
                      <div>
                        <label className="block text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-1.5">Telefon</label>
                        <input type="tel" required className="w-full px-3.5 py-3 bg-surface-alt border border-rule text-text-primary text-[0.875rem] rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all card-shadow" placeholder="+994" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-1.5">Layihə növü</label>
                      <select className="w-full px-3.5 py-3 bg-surface-alt border border-rule text-text-primary text-[0.875rem] rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all card-shadow appearance-none">
                        <option value="">Seçin</option>
                        <option value="ferdi-ev">Fərdi Ev</option>
                        <option value="villa">Villa</option>
                        <option value="renovasiya">Təmir</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] font-medium tracking-[0.06em] uppercase text-text-muted mb-1.5">Mesaj</label>
                      <textarea rows={4} className="w-full px-3.5 py-3 bg-surface-alt border border-rule text-text-primary text-[0.875rem] rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all card-shadow resize-none" placeholder="Qısa məlumat..." />
                    </div>
                    <button type="submit" className="btn-primary">Göndər</button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="bg-surface-alt p-6 rounded-xl card-shadow">
                  <div className="label mb-5">Əlaqə Məlumatları</div>
                  <div className="space-y-4">
                    {[{ Icon: PhoneIcon, label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` }, { Icon: MailIcon, label: "E-poçt", value: COMPANY.email, href: `mailto:${COMPANY.email}` }, { Icon: MapPinIcon, label: "Ünvan", value: COMPANY.address, href: null }, { Icon: ClockIcon, label: "Saatlar", value: COMPANY.workingHours, href: null }, { Icon: InstagramIcon, label: "Instagram", value: "@shahinoglu_construction", href: COMPANY.instagram }].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[0.625rem] font-medium tracking-[0.08em] uppercase text-text-muted mb-0.5">{item.label}</div>
                          {item.href ? (<a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[0.875rem] text-text-secondary hover:text-accent transition-colors">{item.value}</a>) : (<span className="text-[0.875rem] text-text-secondary">{item.value}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-surface-alt p-6 rounded-xl card-shadow mt-6">
                  <div className="label mb-3">Xəritə</div>
                  <div className="aspect-[4/3] bg-surface rounded-lg flex items-center justify-center text-text-muted text-[0.8125rem]">Xəritə yüklənir...</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
