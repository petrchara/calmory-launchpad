import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { getFormatColor } from "@/lib/content-colors";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  format: string; // content format for color
};

const testimonials: Testimonial[] = [
  {
    name: "Veronika K.",
    role: "Lifestyle influencerka",
    quote: "Baví mě plnit denní výzvy a malé úkoly. Jsou krátké, ale postupně cítím, jak se z nich stávají nové dobré návyky. Každý splněný krok mě motivuje pokračovat dál.",
    rating: 5,
    format: "vyzvy-ukoly",
  },
  {
    name: "Michaela J.",
    role: "Maminka na mateřské",
    quote: "Holčička usíná s pohádkami z Calmory, a já si zatím v tichu mohu vydechnout. Miluji, jak jemné a pečující ty příběhy jsou – dokážou nás obě uklidnit.",
    rating: 5,
    format: "detske-pohadky",
  },
  {
    name: "Pavel S.",
    role: "Noční směnový pracovník",
    quote: "Život v noci je občas chaotický, Calmory mi večerní meditace pomáhají vyrovnat rytmus – trocha klidu před spánkem skutečně dělá rozdíl.",
    rating: 5,
    format: "meditace",
  },
  {
    name: "Lenka B.",
    role: "Učitelka mateřské školy",
    quote: "Calmory používám mezi hodinami – krátké dechové cvičení mi pomůže načerpat energii a uklidnit se před další skupinou dětí.",
    rating: 5,
    format: "dychani",
  },
  {
    name: "Daniela R.",
    role: "Studentka na vysoké škole",
    quote: "Zkouškové období? Calmory mi dává prostor na uklidnění i v nejvypjatějším dni – meditace i krátké afirmace mi pomohly zvládnout nervozitu.",
    rating: 5,
    format: "afirmace",
  },
  {
    name: "Ing. Petr Novak",
    role: "Ředitel středně velké společnosti",
    quote: "Calmory mi pomáhá vypnout po náročném pracovním dni. Stačí zapnout večerní příběh a během chvilky cítím, jak se mysl uklidní a tělo připraví na spánek.",
    rating: 5,
    format: "usinani",
  },
  {
    name: "Jan M.",
    role: "Sportovec a instruktor jógy",
    quote: "I když cvičím a dýchám pravidelně, meditace s příběhem mi dávají hloubku, kterou jsem nečekal – Calmory dokáže spočít svěží konec každého dne.",
    rating: 5,
    format: "meditace",
  },
  {
    name: "Karel D.",
    role: "IT specialista",
    quote: "Relaxace s hudbou z Calmory je pro mě každodenní malý zázrak. V testovací verzi jsem si oblíbil zejména jemné meditační skladby – parádní kvalita! Už teď se těším, až přibyde další obsah.",
    rating: 5,
    format: "hudba",
  },
  {
    name: "Monika P.",
    role: "Pracující maminka, dojíždí do práce",
    quote: "Mívám občas úzkostné stavy v dopravních prostředcích. Krátká dechová cvičení v Calmory mi pomáhají zůstat v klidu a zvládnout i náročné situace. Je úžasné, jak jednoduché a účinné tyto techniky jsou.",
    rating: 5,
    format: "dychani",
  },
];

const Stars = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center gap-1" aria-label={`Hodnocení ${value} z 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={i < value ? "text-primary" : "text-muted-foreground"} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const id = "reviews-ld-json";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.setAttribute("type", "application/ld+json");
      el.id = id;
      document.head.appendChild(el);
    }
    const avg = testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Calmory App",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avg.toFixed(1),
        reviewCount: testimonials.length,
        bestRating: "5",
        worstRating: "1",
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: t.rating },
        author: { "@type": "Person", name: t.name },
        reviewBody: t.quote,
      })),
    };
    el.textContent = JSON.stringify(jsonLd);
  }, []);

  // Group testimonials into slides of 3
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  return (
    <section id="social-proof" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Recenze spolupracujících uživatelů</h2>
          <p className="mt-4 text-muted-foreground">
            Co o Calmory říkají spolupracující uživatelé a odborníci, kteří nám pomáhají s testováním obsahu a používáním aplikace. Reálné zkušenosti, krátce a k věci.
          </p>
        </div>
        
        <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {slides.map((slide, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slide.map((t) => {
                    const colors = getFormatColor(t.format);
                    return (
                      <Card key={t.name} className="glass-card hover-scale animate-fade-in">
                        <CardContent className="p-6 flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="size-12">
                              <AvatarFallback 
                                style={{ 
                                  backgroundColor: `hsl(${colors.background})`,
                                  color: `hsl(${colors.text})`
                                }}
                              >
                                {t.name.split(" ").map((p) => p[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{t.name}</div>
                              <div className="text-sm text-muted-foreground">{t.role}</div>
                            </div>
                          </div>
                          <Stars value={t.rating} />
                          <blockquote className="text-sm text-muted-foreground">"{t.quote}"</blockquote>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Slide dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index + 1 === current ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Přejít na slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;