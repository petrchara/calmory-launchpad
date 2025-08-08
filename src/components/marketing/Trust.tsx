import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, GraduationCap, FileCheck2 } from "lucide-react";

const Trust = () => {
  useEffect(() => {
    const id = "org-ld-json";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.setAttribute("type", "application/ld+json");
      el.id = id;
      document.head.appendChild(el);
    }
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Calmory",
          url: "https://calmoryapp.com/",
        },
        {
          "@type": "WebSite",
          name: "Calmory App – terapeutická mobilní aplikace",
          url: "https://calmoryapp.com/",
        },
      ],
    };
    el.textContent = JSON.stringify(jsonLd);
  }, []);

  const items = [
    {
      icon: GraduationCap,
      title: "Evidence‑based přístup",
      points: [
        "Techniky vycházejí z CBT, ACT a mindfulness",
        "Tvořeno ve spolupráci s odborníky",
        "Odkazy na zdroje a metodiku (brzy)",
      ],
    },
    {
      icon: Lock,
      title: "Ochrana soukromí (GDPR)",
      points: [
        "Transparentní souhlasy a kontrola nastavení",
        "Šifrované přenosy a bezpečná úložiště",
        "Zásady ochrany osobních údajů (brzy)",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Odborný dohled",
      points: [
        "Licencovaní psychologové a terapeuti",
        "Interní revize obsahu a etické standardy",
        "Kontinuální zlepšování na základě dat",
      ],
    },
  ] as const;

  return (
    <section id="duveryhodnost" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Důvěryhodnost a bezpečí</h2>
          <p className="mt-4 text-muted-foreground">
            Calmory stavíme na vědě, transparentní práci s daty a odborném dohledu. Krátce, jasně, s respektem.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, points }) => (
            <Card key={title} className="glass-card animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <FileCheck2 className="size-4 mt-0.5 text-primary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
