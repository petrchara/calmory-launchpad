import { useEffect } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import TherapyAlphabet from "@/components/marketing/TherapyAlphabet";
const TherapyAlphabetPage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Terapeutická abeceda – Calmory";

    const metaDesc = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      document.head.appendChild(m);
      return m;
    })();
    metaDesc.setAttribute(
      'content',
      'Terapeutická abeceda: krátké terapeutické tipy, postupy a inspirace pro klidnější mysl. Přehled všech dílů seriálu Calmory.'
    );

    const linkCanonical = document.querySelector('link[rel="canonical"]') || (() => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      document.head.appendChild(l);
      return l;
    })();
    linkCanonical.setAttribute('href', window.location.origin + '/abeceda');

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <header className="py-12 md:py-16">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Terapeutická abeceda – přehled</h1>
            <p className="mt-4 text-muted-foreground">
              Kompletní přehled krátkých terapeutických tipů, cvičení a inspirace ze seriálu Calmory.
            </p>
          </div>
        </header>

        {/* Reuse the section component without the self-link button */}
        <TherapyAlphabet showAllButton={false} />
      </main>
      <Footer />
    </>
  );
};

export default TherapyAlphabetPage;
