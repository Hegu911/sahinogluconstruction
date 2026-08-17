"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MOCK = [
  { id: "1", name: "Kamil Əliyev", phone: "+994 77 123 45 67", projectType: "Villa", message: "Abşeron rayonunda villa tikdirmək istəyirəm. 300 m², 5 otaq.", date: "12.08.2026", read: false },
  { id: "2", name: "Nigar Hüseynova", phone: "+994 50 987 65 43", projectType: "Təmir", message: "Nərimanov rayonunda mənzil təmiri. 110 m², 3 otaq.", date: "10.08.2026", read: true },
];

export default function AdminMessagesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState(MOCK);
  useEffect(() => { if (typeof window !== "undefined" && !localStorage.getItem("admin_auth")) router.push("/admin/login"); }, [router]);
  const toggleRead = (id: string) => setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m)));

  return (
    <div>
      <div className="mb-6">
        <h1 className="heading-lg text-text-primary">Müraciətlər</h1>
        <p className="body-sm mt-0.5">{messages.length} müraciət, {messages.filter((m) => !m.read).length} oxunmamış</p>
      </div>
      <div className="space-y-0">
        {messages.length === 0 ? (
          <div className="py-12 text-center border-t border-border"><p className="text-[0.8125rem] text-text-muted">Müraciət yoxdur</p></div>
        ) : messages.map((m) => (
          <div key={m.id} className={`p-4 bg-surface-light border-b border-border ${m.read ? "" : "border-l-2 border-l-accent"}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[0.8125rem] font-medium text-text-primary">{m.name}</span>
                <span className="text-[0.6rem] px-1.5 py-0.5 bg-surface-lighter text-text-muted rounded-[1px]">{m.projectType}</span>
                {!m.read && <span className="w-1.5 h-1.5 bg-accent rounded-full" />}
              </div>
              <span className="text-[0.6rem] text-text-muted">{m.date}</span>
            </div>
            <p className="text-[0.8125rem] text-text-secondary leading-relaxed mb-2">{m.message}</p>
            <div className="flex items-center justify-between">
              <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="text-[0.75rem] font-medium text-accent hover:underline">{m.phone}</a>
              <button onClick={() => toggleRead(m.id)} className="text-[0.65rem] text-text-muted hover:text-text-primary transition-colors">{m.read ? "Oxunmadı" : "Oxundu"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
