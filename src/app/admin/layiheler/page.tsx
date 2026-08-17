"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { Project } from "@/lib/types";

export default function AdminProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState({ title: "", location: "", area: "", rooms: "", year: "", duration: "", category: "ferdi-ev" as Project["category"], description: "", heroImage: "" });

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("admin_auth")) router.push("/admin/login");
  }, [router]);

  const resetForm = () => { setForm({ title: "", location: "", area: "", rooms: "", year: "", duration: "", category: "ferdi-ev", description: "", heroImage: "" }); setEditing(null); setShowForm(false); };
  const handleEdit = (p: Project) => { setForm({ title: p.title, location: p.location, area: String(p.area), rooms: String(p.rooms), year: String(p.year), duration: p.duration, category: p.category, description: p.description, heroImage: p.heroImage }); setEditing(p); setShowForm(true); };
  const handleDelete = (id: string) => setProjects((prev) => prev.filter((p) => p.id !== id));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const np: Project = { id: editing ? editing.id : `p-${Date.now()}`, title: form.title, location: form.location, area: Number(form.area), rooms: Number(form.rooms), year: Number(form.year), duration: form.duration, category: form.category, description: form.description, heroImage: form.heroImage || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", gallery: [], beforeImage: "", afterImage: "" };
    editing ? setProjects((prev) => prev.map((p) => (p.id === editing.id ? np : p))) : setProjects((prev) => [...prev, np]);
    resetForm();
  };

  const ic = "w-full px-2.5 py-2 bg-surface-alt border border-border text-text-primary text-[0.8125rem] rounded-[1px] focus:outline-none focus:border-accent";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="heading-lg text-text-primary">Layihələr</h1><p className="body-sm mt-0.5">{projects.length} layihə</p></div>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="btn-fill !text-[0.6875rem]">+ Yeni</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 bg-surface-alt border border-border rounded-[1px] mb-6 space-y-3">
          <div className="label mb-1">{editing ? "Redaktə" : "Yeni"}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Başlıq</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Yer</label><input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Sahə</label><input type="number" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Otaq</label><input type="number" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">İl</label><input type="number" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Müddət</label><input type="text" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className={ic} required /></div>
            <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Növ</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as Project["category"] })} className={ic}><option value="ferdi-ev">Fərdi Ev</option><option value="villa">Villa</option><option value="renovasiya">Renovasiya</option></select></div>
            <div className="sm:col-span-2"><label className="block text-[0.6rem] text-text-muted mb-0.5">Şəkil URL</label><input type="url" value={form.heroImage} onChange={(e) => setForm({ ...form, heroImage: e.target.value })} className={ic} /></div>
          </div>
          <div><label className="block text-[0.6rem] text-text-muted mb-0.5">Təsvir</label><textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${ic} resize-none`} required /></div>
          <div className="flex gap-2"><button type="submit" className="btn-fill !text-[0.6875rem]">{editing ? "Yadda" : "Əlavə"}</button><button type="button" onClick={resetForm} className="btn-ghost !text-[0.6875rem]">Ləğv</button></div>
        </form>
      )}

      <div className="space-y-0">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center gap-3 p-3 bg-surface-alt border-b border-border">
            <img src={p.heroImage} alt={p.title} className="w-14 h-10 object-cover rounded-[1px] shrink-0" />
            <div className="flex-1 min-w-0"><div className="text-[0.8125rem] font-medium text-text-primary truncate">{p.title}</div><div className="text-[0.6rem] text-text-muted">{p.location} · {p.area} m² · {p.year}</div></div>
            <div className="flex gap-1.5 shrink-0">
              <button onClick={() => handleEdit(p)} className="px-2 py-1 text-[0.65rem] font-medium text-text-secondary border border-border rounded-[1px] hover:border-accent hover:text-accent transition-colors">Red.</button>
              <button onClick={() => handleDelete(p.id)} className="px-2 py-1 text-[0.65rem] font-medium text-red-400 border border-border rounded-[1px] hover:border-red-400 transition-colors">Sil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
