import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  {
    id: 1,
    title: "Úvodní obrazovka",
    content: (
      <div className="bg-gradient-to-b from-primary/10 to-background h-full flex flex-col justify-center items-center p-6">
        <div className="w-16 h-16 bg-primary rounded-full mb-4 flex items-center justify-center">
          <span className="text-2xl text-primary-foreground">🧘</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Vítejte v Calmory</h3>
        <p className="text-sm text-muted-foreground text-center">
          Vaše cesta ke klidnější mysli začíná zde
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Meditace",
    content: (
      <div className="bg-gradient-to-b from-accent/10 to-background h-full flex flex-col p-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Ranní meditace</h3>
          <div className="space-y-3">
            <div className="bg-accent/20 p-3 rounded-lg">
              <div className="text-sm font-medium">Dechové cvičení</div>
              <div className="text-xs text-muted-foreground">5 minut</div>
            </div>
            <div className="bg-accent/20 p-3 rounded-lg">
              <div className="text-sm font-medium">Mindfulness</div>
              <div className="text-xs text-muted-foreground">10 minut</div>
            </div>
            <div className="bg-accent/20 p-3 rounded-lg">
              <div className="text-sm font-medium">Relaxace</div>
              <div className="text-xs text-muted-foreground">15 minut</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground">▶</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Příběhy",
    content: (
      <div className="bg-gradient-to-b from-secondary/10 to-background h-full flex flex-col p-6">
        <h3 className="text-lg font-semibold mb-4">Večerní příběhy</h3>
        <div className="flex-1 space-y-4">
          <div className="bg-secondary/20 p-4 rounded-lg">
            <div className="text-sm font-medium mb-2">Klidná noc v lese</div>
            <div className="text-xs text-muted-foreground mb-2">8 minut</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full w-2/3"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Denní výzvy",
    content: (
      <div className="bg-gradient-to-b from-destructive/10 to-background h-full flex flex-col p-6">
        <h3 className="text-lg font-semibold mb-4">Dnešní výzvy</h3>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground">✓</span>
            </div>
            <div>
              <div className="text-sm font-medium">Ranní dechové cvičení</div>
              <div className="text-xs text-muted-foreground">Splněno</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
            <div className="w-6 h-6 bg-muted rounded-full"></div>
            <div>
              <div className="text-sm font-medium">Chvilka vděčnosti</div>
              <div className="text-xs text-muted-foreground">Zbývá 1 úkol</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
            <div className="w-6 h-6 bg-muted rounded-full"></div>
            <div>
              <div className="text-sm font-medium">Večerní reflexe</div>
              <div className="text-xs text-muted-foreground">Připraveno</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Profil & Statistiky",
    content: (
      <div className="bg-gradient-to-b from-muted/20 to-background h-full flex flex-col p-6">
        <h3 className="text-lg font-semibold mb-4">Váš pokrok</h3>
        <div className="flex-1 space-y-4">
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="text-sm font-medium mb-2">Týdenní série</div>
            <div className="text-2xl font-bold text-primary">14 dní</div>
            <div className="text-xs text-muted-foreground">Nejdelší série</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-accent/10 p-3 rounded-lg text-center">
              <div className="text-lg font-semibold">42</div>
              <div className="text-xs text-muted-foreground">Meditací</div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg text-center">
              <div className="text-lg font-semibold">18h</div>
              <div className="text-xs text-muted-foreground">Celkem</div>
            </div>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg">
            <div className="text-sm font-medium mb-2">Oblíbené aktivity</div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div>• Ranní dechové cvičení</div>
              <div>• Večerní příběhy</div>
              <div>• Mindfulness v práci</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const MobileScreenCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000); // Zpomaleno na 5 sekund

    return () => {
      clearInterval(autoplay);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Navigační tlačítka mimo rám telefonu - pouze na desktopu */}
      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg z-10 items-center justify-center"
        onClick={() => api?.scrollPrev()}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg z-10 items-center justify-center"
        onClick={() => api?.scrollNext()}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Telefon rám - zvětšený cca o 1/2 z původních rozměrů */}
      <div className="relative bg-slate-800 rounded-[3rem] p-2 shadow-2xl w-72 mx-auto">
        <div className="bg-black rounded-[2.5rem] p-1">
          <div className="bg-slate-900 rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-10"></div>
            
            {/* Screen content - poměr 9:16 */}
            <div className="w-full aspect-[9/16] bg-background">
              <Carousel 
                opts={{ 
                  loop: true,
                  duration: 40 // Pomalejší přechod
                }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
                setApi={setApi}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {screens.map((screen) => (
                    <CarouselItem key={screen.id} className="h-full">
                      <div className="w-full h-full">
                        {screen.content}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        
        {/* Tlačítka na straně telefonu */}
        <div className="absolute -left-1 top-16 w-1 h-8 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-1 top-28 w-1 h-12 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-1 top-44 w-1 h-12 bg-slate-700 rounded-l"></div>
      </div>

      {/* Indikátory slideů - stejné jako v testimonials */}
      <div className="flex justify-center mt-8 gap-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === index ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Přejít na slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreenCarousel;