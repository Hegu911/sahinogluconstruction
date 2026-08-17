import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description:
    "Şahinoğlu Construction haqqında — 2010-cu ildən Bakı və Abşeronda premium tikinti. 14 il təcrübə, 127+ tamamlanmış obyekt.",
  openGraph: {
    title: "Haqqımızda | Şahinoğlu Construction",
    description:
      "2010-cu ildən Bakı və Abşeronda premium tikinti. 14 il təcrübə, 127+ tamamlanmış obyekt.",
  },
};

export default function AboutPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
