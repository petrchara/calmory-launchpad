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
    <div className="relative w-full max-w-xs mx-auto">
      {/* Telefon rám - zmenšený z 720x1280 */}
      <div className="relative bg-slate-800 rounded-[2rem] p-1.5 shadow-2xl w-48 mx-auto">
        <div className="bg-black rounded-[1.75rem] p-0.5">
          <div className="bg-slate-900 rounded-[1.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-lg z-10"></div>
            
            {/* Screen content - poměr 720:1280 = 9:16 */}
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
                
                {/* Navigační tlačítka */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={() => api?.scrollPrev()}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={() => api?.scrollNext()}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Carousel>
            </div>
          </div>
        </div>
        
        {/* Tlačítka na straně telefonu */}
        <div className="absolute -left-0.5 top-12 w-0.5 h-6 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-0.5 top-20 w-0.5 h-8 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-0.5 top-32 w-0.5 h-8 bg-slate-700 rounded-l"></div>
      </div>

      {/* Indikátory slideů */}
      <div className="flex justify-center mt-6 space-x-3">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-primary scale-110" 
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Přejít na slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreenCarousel;