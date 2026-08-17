import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xidmətlər",
  description:
    "Şahinoğlu Construction xidmətləri — fərdi ev tikintisi, villa layihələndirmə, təmir renovasiya, açar təhvil. Bakı, Abşeron.",
  openGraph: {
    title: "Xidmətlər | Şahinoğlu Construction",
    description:
      "Fərdi ev tikintisi, villa layihələndirmə, təmir renovasiya, açar təhvil.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
