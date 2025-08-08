import { useState } from "react";
import { Play, Headphones, Video } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SampleItem {
  type: "audio" | "video";
  title: string;
  src: string;
}

interface SlideItem {
  title: string;
  description: string;
  category: string;
  samples: SampleItem[];
}

const slides: SlideItem[] = [
  {
    title: "Dýchání 4–7–8",
    description: "Zklidněte nervový systém řízeným dechem během 2 minut.",
    category: "Dýchání",
    samples: [
      { type: "audio", title: "Audio průvodce", src: "/media/sample-audio.mp3" },
      { type: "video", title: "Video ukázka", src: "/media/sample-video.mp4" },
      { type: "audio", title: "Zvuk metronomu", src: "/media/sample-audio.mp3" },
    ],
  },
  {
    title: "Rychlé uvolnění",
    description: "Krátké uvolnění ramen a žvýkacích svalů.",
    category: "Relaxace",
    samples: [
      { type: "audio", title: "Audio instrukce", src: "/media/sample-audio.mp3" },
      { type: "video", title: "Ukázka postoje", src: "/media/sample-video.mp4" },
      { type: "audio", title: "Ambientní pozadí", src: "/media/sample-audio.mp3" },
    ],
  },
  {
    title: "Zápis myšlenek",
    description: "Strukturovaný journaling proti ruminaci.",
    category: "Mindfulness",
    samples: [
      { type: "audio", title: "Audio doprovod", src: "/media/sample-audio.mp3" },
      { type: "video", title: "Práce s myšlenkou", src: "/media/sample-video.mp4" },
      { type: "audio", title: "Zvuk timeru", src: "/media/sample-audio.mp3" },
    ],
  },
];

const PhoneMock = ({ title, description, category }: { title: string; description: string; category: string }) => (
  <div className="mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[2rem] border border-border bg-card shadow-inner overflow-hidden p-4 flex">
    <div className="relative bg-gradient-primary rounded-2xl w-full flex flex-col justify-end p-5">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(1000px_circle_at_30%_10%,hsl(var(--ring)/.15),transparent_60%)]" />
      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-secondary/70 w-max">{category}</span>
      <h3 className="mt-3 text-xl font-bold leading-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
      <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow hover-scale">
        <Play className="size-4" />
        Spustit ukázku
      </button>
    </div>
  </div>
);

const ContentCarousel = () => {
  const [active, setActive] = useState<SampleItem | null>(null);

  return (
    <section id="ukazky" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Prohlédněte si ukázky obsahu</h2>
          <p className="mt-4 text-muted-foreground">Různé formáty v mobilním rozhraní: audio průvodci, krátká videa i textové postupy.</p>
        </div>

        <Carousel className="relative">
          <CarouselContent>
            {slides.map((s, i) => (
              <CarouselItem key={i}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <PhoneMock title={s.title} description={s.description} category={s.category} />
          <div>
            <header className="mb-4">
              <h3 className="text-xl font-semibold">{s.category}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </header>
            <div className="grid gap-4">
              {s.samples.map((it, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(it)}
                  className="glass-card rounded-xl p-4 text-left hover-scale animate-fade-in"
                  aria-label={`Spustit ${it.type} ukázku: ${it.title}`}
                >
                  <div className="flex items-center gap-4">
                    {it.type === "audio" ? (
                      <Headphones className="size-5 text-primary" aria-hidden="true" />
                    ) : (
                      <Video className="size-5 text-primary" aria-hidden="true" />
                    )}
                    <div className="flex-1">
                      <div className="font-medium">{it.title}</div>
                      <div className="text-sm text-muted-foreground capitalize">{it.type}</div>
                    </div>
                    <Play className="size-5 text-muted-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{active?.title}</DialogTitle>
          </DialogHeader>
          {active?.type === "audio" ? (
            <audio controls preload="none" className="w-full">
              <source src={active.src} type="audio/mpeg" />
              Váš prohlížeč nepodporuje přehrávání audia.
            </audio>
          ) : active?.type === "video" ? (
            <video controls preload="none" className="w-full rounded-lg" poster="/placeholder.svg">
              <source src={active.src} type="video/mp4" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContentCarousel;
