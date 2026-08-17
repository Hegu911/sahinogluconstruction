"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PROJECTS, TESTIMONIALS } from "@/lib/data";

export default function AdminDashboard() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("admin_auth")) router.push("/admin/login");
  }, [router]);

  return (
    <div>
      <h1 className="heading-lg text-text-primary mb-1">Panel</h1>
      <p className="body-sm mb-8">Xoş gəlmisiniz.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-border mb-8">
        {[
          { label: "Layihələr", count: PROJECTS.length, href: "/admin/layiheler" },
          { label: "Rəylər", count: TESTIMONIALS.length, href: "/admin/reyler" },
          { label: "Müraciətlər", count: 0, href: "/admin/muracietler" },
        ].map((stat) => (
          <Link key={stat.label} href={stat.href} className="bg-surface-alt p-5 hover:bg-surface-alt transition-colors">
            <div className="font-heading text-2xl text-accent font-normal">{stat.count}</div>
            <div className="text-[0.65rem] font-medium tracking-[0.06em] uppercase text-text-muted mt-1">{stat.label}</div>
          </Link>
        ))}
      </div>
      <div className="py-6 border-t border-border">
        <div className="label mb-4">Son Layihələr</div>
        {PROJECTS.slice(0, 5).map((p) => (
          <div key={p.id} className="flex items-center gap-3 py-3 border-b border-border">
            <img src={p.heroImage} alt={p.title} className="w-12 h-9 object-cover rounded-[1px] shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[0.8125rem] font-medium text-text-primary truncate">{p.title}</div>
              <div className="text-[0.65rem] text-text-muted">{p.location} · {p.area} m²</div>
            </div>
            <div className="text-[0.65rem] text-text-muted shrink-0">{p.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
