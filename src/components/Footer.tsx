import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/data";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, InstagramIcon } from "@/components/icons/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper pb-16 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="py-10 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-2.5">
                <img src="/image.png" alt="Şahinoğlu" className="h-14 w-auto brightness-0 invert" />
                <span className="inline-flex flex-col leading-none font-heading tracking-tight font-normal uppercase">
                  <span className="text-bronze text-base">Şahinoğlu</span>
                  <span className="text-paper text-[0.65rem] tracking-[0.15em]">Construction</span>
                </span>
              </div>
              <p className="body-sm text-text-muted max-w-[280px] leading-relaxed">
                {COMPANY.slogan}. 14 ildir Bakı və Abşeronda keyfiyyətli tikinti.
              </p>
              <div className="mt-4">
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.8125rem] text-text-muted hover:text-bronze transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="label mb-4">Səhifələr</div>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-[0.8125rem] text-text-muted hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-4">
              <div className="label mb-4">Əlaqə</div>
              <div className="space-y-3">
                {[
                  { Icon: PhoneIcon, value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
                  { Icon: MailIcon, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { Icon: MapPinIcon, value: COMPANY.address, href: null },
                  { Icon: ClockIcon, value: COMPANY.workingHours, href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <item.Icon className="w-3.5 h-3.5 text-text-muted shrink-0" />
                    {item.href ? (
                      <a href={item.href} className="text-[0.8125rem] text-text-muted hover:text-paper transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-[0.8125rem] text-text-muted">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-light py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.6875rem] text-text-muted">© {year} Şahinoğlu Construction</p>
          <div className="flex items-center gap-4 text-[0.6875rem] text-text-muted">
            <Link href="/sertifikatlar" className="hover:text-paper transition-colors">Şərtlər</Link>
            <Link href="/mexfilik" className="hover:text-paper transition-colors">Gizlilik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
