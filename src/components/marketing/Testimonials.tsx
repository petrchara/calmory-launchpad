import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Eva K.",
    role: "klinická psycholožka",
    quote:
      "Calmory přináší krátké, ale účinné intervence, které pacienti snadno zařadí do dne.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Jakub S.",
    role: "HR ředitel",
    quote:
      "Skvělý nástroj pro wellbeing ve firmě – rychlé cvičení, jasná doporučení, bez zbytečného tlaku.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Mgr. Klára D.",
    role: "terapeutka spánku",
    quote:
      "Mikro‑náviky pro spánek fungují. Líbí se mi evidence‑based přístup a důraz na bezpečí.",
    rating: 4,
    image: "/placeholder.svg",
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

  return (
    <section id="social-proof" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Recenze významných uživatelů</h2>
          <p className="mt-4 text-muted-foreground">
            Co o Calmory říkají odborníci a lídři komunit. Reálné zkušenosti, krátce a k věci.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="glass-card hover-scale animate-fade-in">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={t.image} alt={`Profilová fotografie ${t.name}`} />
                    <AvatarFallback>{t.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <Stars value={t.rating} />
                <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
