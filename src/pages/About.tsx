import { useEffect } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, BookOpen, Headphones, MessageSquare, Music, FileText, Heart, ShieldCheck, Zap } from "lucide-react";

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
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/af9a64e5-7047-425a-8818-cc0127758f1e.png')`
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl md:text-4xl font-bold text-white">Calmory</span>
            </div>
          </div>
        </section>

        {/* Motto Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Calmory, klidné místo pro tvůj běžný den
              </h2>
              <div className="grid grid-cols-3 gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wind className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Dechová a relaxační cvičení</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Pomohou vám uvolnit napětí, zklidnit dech a najít rovnováhu – kdykoli během dne.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Příběhy na spaní a pohádky</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Podpoří klidné usínání a pocit jistoty, jsou vám k dispozici pro děti i dospělé.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Meditace a průvodci</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Naučí vás, jak najít klid a soustředění podle denní fáze – od rána až po večerní ztišení.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Afirmace a krátké myšlenky</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Pomohou vám nastavit mysl k odolnosti a laskavějšímu vztahu k sobě.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Hudba a zvuky přírody</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Budou vás provázet při práci i odpočinku a navodí klidný spánek.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Odborný obsah</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Nabízí vám srozumitelné vysvětlení důležitých témat duševní pohody bez složité hantýrky.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Naše mise</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Jsme česká aplikace, která propojuje příběhy, praktická cvičení a odborné vedení, aby pomohla běžným lidem zvládat stres a hledat klid.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <BookOpen className="size-6 text-primary" />
                    <span className="font-bold text-lg">Příběhy</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">jako srdce aplikace</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Skutečné příběhy, anonymizované a citlivě moderované nebo vytvořené s terapeuty na základě životních zkušeností. Přinášejí strategie zvládání běžných životních výzev a podporují pocit sounáležitosti.</p>
                  <p className="mt-3 text-sm text-muted-foreground italic">"Příběhy dávají věcem smysl. Pomáhají cítit, že v tom člověk není nikdy sám." — Michaela Pompová, manažerka obsahu.</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <ShieldCheck className="size-6 text-primary" />
                    <span className="font-bold text-lg">Klid</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">jako každodenní dovednost</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Klid u nás není luxusní zážitek, ale praktická dovednost. Nabízíme krátká a srozumitelná cvičení: dechové techniky, meditace, relaxace před spaním, nebo výzvy, techniky a postupy pro okamžité zklidnění. Vše navržené tak, aby se daly použít tady a teď. V kanceláři, v tramvaji nebo doma před usnutím.</p>
                  <p className="mt-3 text-sm text-muted-foreground italic">"Calmory tvoříme pro běžný den každého z nás. Pět minut klidu, které opravdu stihneš." — Stanislav Knotek, ředitel projektu.</p>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Zap className="size-6 text-primary" />
                    <span className="font-bold text-lg">Bezpečí</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">jako základ důvěry</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Bezpečí pro nás znamená víc než jen ochranu dat. Budujeme prostředí, kde se uživatel cítí respektován, pochopen a nikdy neohrožen. Obsah vzniká pod dohledem odborníků a je tvořen tak, aby pomáhal a neškodil. Calmory je tu pro běžný život a každodenní činnosti, kdy člověk občas ztratí rovnováhu a potřebuje se zklidnit, nadechnout a znovu najít svůj vnitřní klid.</p>
                  <p className="mt-3 text-sm text-muted-foreground italic">"Naším krédem je: Odbornost. Bezpečí. Lidskost. Obsah Calmory tvoříme tak, aby pomáhal a nikdy neškodil." — Filip Hajna, odborný garant projektu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Behind Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kdo stojí za Calmory?</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Calmory vzniká pod odborným vedením týmu terapeutů a psychologů z organizace Velký vůz Sever, v jehož čele stojí psycholog a terapeut Filip Hajna. Tento tým má dlouholeté zkušenosti s duševním zdravím, psychoterapií i krizovou intervencí a do obsahu aplikace přináší ověřené metodiky a bezpečné postupy. Díky jejich vedení je každý příběh, meditace či cvičení navrženo tak, aby naplňovalo naše základní pravidlo: obsah pomáhá a nikdy neškodí.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Velký vůz Sever je zastřešující odbornou organizací, se kterou Calmory úzce spolupracuje. Kromě vlastního týmu terapeutů zapojujeme i další specialisty v oblastech osobního rozvoje, koučingu či krizové intervence. Díky tomu nabízíme pestrou a odborně podloženou škálu nástrojů, které podporují každodenní duševní pohodu, a zároveň zajišťujeme, že každý prvek aplikace je podložen zkušeností a odbornou praxí.
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
              <p className="text-lg text-muted-foreground mb-12">
                Za Calmory stojí tým psychologů, terapeutů a vývojářů, 
                kteří spojili své síly, aby vytvořili aplikaci, která skutečně pomáhá.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass-card animate-fade-in">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="/placeholder.svg" alt="Stanislav Knotek" />
                      <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Stanislav Knotek</CardTitle>
                      <p className="text-sm text-muted-foreground">Ředitel Calmory</p>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="glass-card animate-fade-in">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="/placeholder.svg" alt="Filip Hajna" />
                      <AvatarFallback>FH</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Filip Hajna</CardTitle>
                      <p className="text-sm text-muted-foreground">Odborný garant, psycholog a terapeut</p>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="glass-card animate-fade-in">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="/placeholder.svg" alt="Michaela Pompová" />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Michaela Pompová</CardTitle>
                      <p className="text-sm text-muted-foreground">Manažerka obsahu</p>
                    </div>
                  </CardHeader>
                </Card>
                
                <Card className="glass-card animate-fade-in">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="size-14">
                      <AvatarImage src="/placeholder.svg" alt="Leoš Silný" />
                      <AvatarFallback>LS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Leoš Silný</CardTitle>
                      <p className="text-sm text-muted-foreground">Vývoj aplikace</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Přidejte se k nám</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Začněte svou cestu k lepšímu duševnímu zdraví už dnes.
              </p>
              <div className="text-left bg-background/50 rounded-lg p-6 mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Bezplatný přístup na omezenou dobu</strong> – možnost vyzkoušet všechny formáty obsahu.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Poté <strong>členské předplatné</strong>, které odemkne celou knihovnu i pravidelně přidávané novinky.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Bonus pro předregistrované:</strong> zvýhodněná cena na první rok.
                  </p>
                </div>
              </div>
              <Button asChild variant="hero" size="lg">
                <a href="/#cekaci-listina">Přidat se pro přednostní přístup</a>
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