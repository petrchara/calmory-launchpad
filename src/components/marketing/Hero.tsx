import { Button } from "@/components/ui/button";
import heroImage from "@/assets/calmory-hero.jpg";
import { Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="relative overflow-hidden">
      <div ref={ref} className="spotlight-surface bg-gradient-primary">
        <div className="container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/60 text-secondary-foreground">
                <Sparkles className="size-4" /> Spuštění za 2 měsíce
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
                Calmory App – terapeutická mobilní aplikace pro klidnější mysl
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                Zvládejte stres a úzkost s cvičeními vycházejícími z ověřených
                terapeutických přístupů. Připojte se k čekací listině a získejte
                brzký přístup a exkluzivní tipy.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="#cekaci-listina">Přidat se na čekací listinu</a>
                </Button>
                <Button variant="outline" size="lg">
                  Již brzy pro iOS a Android
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="size-4"/> Ochrana soukromí</div>
                <div className="flex items-center gap-2"><HeartPulse className="size-4"/> Vědecky podložené</div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Calmory App hrdina – náhled terapeutické aplikace"
                className="w-full max-w-lg mx-auto rounded-xl shadow-xl animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
