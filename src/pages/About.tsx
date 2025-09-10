import { useEffect } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    document.title = "O nás | Calmory - Aplikace pro duševní pohodu";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Seznamte se s týmem Calmory a naším posláním pomáhat lidem na cestě k lepšímu duševnímu zdraví prostřednictvím vědecky podložených technik.");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${window.location.origin}/o-nas`);
    } else {
      const newCanonicalLink = document.createElement("link");
      newCanonicalLink.rel = "canonical";
      newCanonicalLink.href = `${window.location.origin}/o-nas`;
      document.head.appendChild(newCanonicalLink);
    }

    // JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Calmory",
        "description": "Aplikace pro duševní pohodu založená na vědecky podložených technikách",
        "url": `${window.location.origin}`,
        "sameAs": [
          "https://www.instagram.com/calmoryapp_cz/",
          "https://www.facebook.com/profile.php?id=61578518186914",
          "https://www.tiktok.com/@calmoryapp_cz",
          "https://www.youtube.com/@CalmoryApp"
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/af9a64e5-7047-425a-8818-cc0127758f1e.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl md:text-4xl font-bold text-white">Calmory</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Vítejte v Calmory
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-6">
              Jsme tým odborníků a technologů, kteří věří, že duševní zdraví by mělo být dostupné každému.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Naše mise</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  V Calmory věříme, že každý si zaslouží přístup k nástrojům pro péči o duševní zdraví. 
                  Naše aplikace kombinuje vědecky podložené techniky s moderní technologií, 
                  aby poskytla personalizovanou podporu přímo do vaší kapsy.
                </p>
                <p className="text-lg text-muted-foreground">
                  Používáme přístupy založené na kognitivně-behaviorální terapii (CBT), 
                  terapii zaměřené na přijetí a commitment (ACT) a mindfulness, 
                  které jsou navrženy ve spolupráci s odborníky v oblasti duševního zdraví.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Naše hodnoty</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vědeckost</h3>
                  <p className="text-muted-foreground">
                    Všechny naše techniky jsou založeny na vědeckých důkazech a ověřené praxi.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Dostupnost</h3>
                  <p className="text-muted-foreground">
                    Snažíme se učinit péči o duševní zdraví dostupnou pro co nejširší komunitu.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Bezpečnost</h3>
                  <p className="text-muted-foreground">
                    Vaše soukromí a bezpečnost jsou pro nás prioritou číslo jedna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Náš tým</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Za Calmory stojí tým psychologů, terapeutů a vývojářů, 
                kteří spojili své síly, aby vytvořili aplikaci, která skutečně pomáhá.
              </p>
              <div className="glass-card rounded-2xl p-8">
                <p className="text-muted-foreground italic">
                  Podrobné informace o týmu budou doplněny na základě obsahu z vašeho dokumentu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Připojte se k nám</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Začněte svou cestu k lepšímu duševnímu zdraví už dnes.
              </p>
              <Button asChild variant="hero" size="lg">
                <a href="/#cekaci-listina">Přidat se na čekací listinu</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;