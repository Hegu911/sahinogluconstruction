import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Əlaqə",
  description:
    "Şahinoğlu Construction ilə əlaqə — telefon, e-poçt, ünvan. Bakı, Abşeron, Xırdalan. Bizi WhatsApp ilə də yaza bilərsiniz.",
  openGraph: {
    title: "Əlaqə | Şahinoğlu Construction",
    description:
      "Bizimlə əlaqə saxlayın — +994 70 555 27 26",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
