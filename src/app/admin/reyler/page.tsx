"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TESTIMONIALS } from "@/lib/data";
import { Testimonial } from "@/lib/types";

export default function AdminReviewsPage() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", projectTitle: "", text: "", image: "", projectImage: "" });

  useEffect(() => { if (typeof window !== "undefined" && !localStorage.getItem("admin_auth")) router.push("/admin/login"); }, [router]);
  const handleDelete = (i: number) => setReviews((prev) => prev.filter((_, idx) => idx !== i));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setReviews((prev) => [...prev, { ...form, image: form.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80", projectImage: form.projectImage || "" }]); setForm({ name: "", projectTitle: "", text: "", image: "", projectImage: "" }); setShowForm(false); };
  const ic = "w-full px-2.5 py-2 bg-paper border border-border text-ink text-[0.8125rem] rounded-[1px] focus:outline-none focus:border-accent";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="heading-lg text-ink">Rəylər</h1><p className="body-sm mt-0.5">{reviews.length} rəy</p></div>
        <button onClick={() => setShowForm(!showForm)} className="btn-fill !text-[0.6875rem]">+ Yeni</button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 bg-paper border border-border rounded-[1px] mb-6 space-y-3">
          <div className="label mb-1">Yeni Rəy</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Ad</label><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Layihə</label><input type="text" value={form.projectTitle} onChange={(e) => setForm({ ...form, projectTitle: e.target.value })} className={ic} required /></div>
          </div>
          <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Rəy</label><textarea rows={2} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} className={`${ic} resize-none`} required /></div>
          <div className="flex gap-2"><button type="submit" className="btn-fill !text-[0.6875rem]">Əlavə</button><button type="button" onClick={() => setShowForm(false)} className="btn-ghost !text-[0.6875rem]">Ləğv</button></div>
        </form>
      )}
      <div className="space-y-0">
        {reviews.map((r, i) => (
          <div key={`${r.name}-${i}`} className="flex items-start gap-3 p-3 bg-paper border-b border-border">
            <img src={r.image} alt={r.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5"><span className="text-[0.8125rem] font-medium text-ink">{r.name}</span><span className="text-[0.65rem] text-text-muted">· {r.projectTitle}</span></div>
              <p className="text-[0.8125rem] text-text-secondary leading-relaxed">{r.text}</p>
            </div>
            <button onClick={() => handleDelete(i)} className="px-2 py-1 text-[0.65rem] font-medium text-red-400 border border-border rounded-[1px] hover:border-red-400 transition-colors shrink-0">Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
}
