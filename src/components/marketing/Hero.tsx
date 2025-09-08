import { Button } from "@/components/ui/button";
import { Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MobileScreenCarousel from "./MobileScreenCarousel";
import { HandleModal } from "@/components/HandleModal";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
                Calmory – terapeutická mobilní aplikace pro klidnější mysl
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                Klidnější mysl, lehčí dech, více radosti. Objevte techniky a příběhy, které pomáhají zvládat stres a přinášejí pohodu. Přidejte se k nám ještě před spuštěním a získejte přístup dřív než ostatní.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="#cekaci-listina">Přidat se pro přednostní přístup</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Vyzkoušet Handle Modal
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="size-4"/> Ochrana soukromí</div>
                <div className="flex items-center gap-2"><HeartPulse className="size-4"/> Vědecky podložené</div>
              </div>
            </div>
            <MobileScreenCarousel />
          </div>
        </div>
      </div>

      <HandleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Handle Behavior Modal"
      >
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ukázka Handle Behavior</h3>
          <p>
            Toto je modální okno podle Ionic dokumentace s Handle Behavior funkcionalitou.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-medium mb-2">Breakpointy</h4>
              <ul className="text-sm space-y-1">
                <li>• 25% - Minimální výška</li>
                <li>• 50% - Střední výška</li>
                <li>• 75% - Maximální výška</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-medium mb-2">Ovládání</h4>
              <ul className="text-sm space-y-1">
                <li>• Klikni na handle pro cyklování</li>
                <li>• Táhni handle pro přesnou pozici</li>
                <li>• Funguje na dotyku i myší</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Handle modal umožňuje uživatelům intuitivně ovládat velikost modalu pomocí handlu v horní části.
              Kliknutím na handle postupně přecházíte mezi definovanými breakpointy.
            </p>
            <p className="text-sm text-gray-600">
              Pokud chcete modal zavřít, buď klikněte na X v pravém horním rohu nebo táhněte handle dolů na 0% breakpoint.
            </p>
          </div>
        </div>
      </HandleModal>
    </header>
  );
};

export default Hero;
