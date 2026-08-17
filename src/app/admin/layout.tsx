"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Panel", exact: true },
  { href: "/admin/layiheler", label: "Layihələr" },
  { href: "/admin/reyler", label: "Rəylər" },
  { href: "/admin/muracietler", label: "Müraciətlər" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-paper-dark">
      <aside className="w-48 bg-ink shrink-0 hidden lg:flex flex-col">
        <div className="p-4 border-b border-ink-light">
          <Link href="/admin" className="font-heading text-base text-paper tracking-tight">Şahinoğlu</Link>
          <div className="text-[0.5rem] font-medium tracking-[0.1em] uppercase text-text-muted mt-0.5">Admin</div>
        </div>
        <nav className="p-3 flex-1">
          {links.map((link) => {
            const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} className={`block px-3 py-2 text-[0.8125rem] rounded-[1px] mb-0.5 transition-colors ${active ? "bg-accent/15 text-accent-light" : "text-text-muted hover:text-paper hover:bg-ink-light"}`}>{link.label}</Link>;
          })}
        </nav>
        <div className="p-3 border-t border-ink-light">
          <Link href="/" className="text-[0.65rem] text-text-muted hover:text-paper transition-colors">Sayta qayıt</Link>
        </div>
      </aside>
      <main className="flex-1 p-4 lg:p-8 overflow-auto">{children}</main>
    </div>
  );
}
