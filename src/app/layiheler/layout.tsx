import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layihələr",
  description:
    "Şahinoğlu Construction tamamlanmış layihələri — premium villalar, fərdi evlər, renovasiya obyektləri. Bakı, Abşeron, Quba.",
  openGraph: {
    title: "Layihələr | Şahinoğlu Construction",
    description:
      "Premium villalar, fərdi evlər, renovasiya obyektləri.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
