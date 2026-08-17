import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-14 lg:pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center px-5 py-16">
          <div className="font-heading text-[5rem] sm:text-[7rem] lg:text-[9rem] leading-[0.85] text-paper-darker select-none">
            404
          </div>
          <h1 className="heading-md text-ink -mt-2 mb-3">Səhifə tapılmadı</h1>
          <p className="body-sm max-w-sm mx-auto mb-8">
            Axtardığınız səhifə mövcud deyil.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-fill">Ana Səhifə</Link>
            <a href="tel:+994705552726" className="btn-ghost">Zəng Et</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
