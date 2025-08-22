import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Telefon rám */}
      <div className="relative bg-slate-800 rounded-[3rem] p-2 shadow-2xl">
        <div className="bg-black rounded-[2.5rem] p-1">
          <div className="bg-slate-900 rounded-[2rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
            
            {/* Screen content */}
            <div className="w-full aspect-[9/19.5] bg-background">
              <Carousel 
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 3000 })]}
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
        <div className="absolute -left-1 top-20 w-1 h-8 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-1 top-32 w-1 h-12 bg-slate-700 rounded-l"></div>
        <div className="absolute -left-1 top-48 w-1 h-12 bg-slate-700 rounded-l"></div>
      </div>

      {/* Indikátory slideů */}
      <div className="flex justify-center mt-4 space-x-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors"
            aria-label={`Přejít na slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreenCarousel;