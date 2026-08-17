"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "sahinoglu2024") {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Yanlış istifadəçi adı və ya şifrə");
    }
  };

  return (
    <div className="min-h-screen bg-surface-alt flex items-center justify-center px-5">
      <div className="w-full max-w-xs">
        <div className="mb-8">
          <div className="font-heading text-lg text-text-primary tracking-tight">Şahinoğlu</div>
          <div className="label !text-accent-light mt-1">Admin</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[0.8125rem] rounded-[1px]">{error}</div>}
          <div>
            <label className="block text-[0.6rem] font-medium tracking-[0.08em] uppercase text-text-muted mb-1.5">Ad</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2.5 bg-surface-alt border border-surface-alt text-text-primary text-[0.8125rem] rounded-[1px] focus:outline-none focus:border-accent" required />
          </div>
          <div>
            <label className="block text-[0.6rem] font-medium tracking-[0.08em] uppercase text-text-muted mb-1.5">Şifrə</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2.5 bg-surface-alt border border-surface-alt text-text-primary text-[0.8125rem] rounded-[1px] focus:outline-none focus:border-accent" required />
          </div>
          <button type="submit" className="btn-fill w-full justify-center">Daxil Ol</button>
        </form>
      </div>
    </div>
  );
}
