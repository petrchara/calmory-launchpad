import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Import wallpapers
import springMeadow1 from "@/assets/wallpapers/spring-meadow-1.jpg";
import springMeadow2 from "@/assets/wallpapers/spring-meadow-2.jpg";
import springMeadow3 from "@/assets/wallpapers/spring-meadow-3.jpg";
import springMeadow4 from "@/assets/wallpapers/spring-meadow-4.jpg";
import springHills1 from "@/assets/wallpapers/spring-hills-1.jpg";
import springHills2 from "@/assets/wallpapers/spring-hills-2.jpg";
import springHills3 from "@/assets/wallpapers/spring-hills-3.jpg";
import springHills4 from "@/assets/wallpapers/spring-hills-4.jpg";
import autumnMountains1 from "@/assets/wallpapers/autumn-mountains-1.jpg";
import autumnMountains2 from "@/assets/wallpapers/autumn-mountains-2.jpg";
import autumnMountains3 from "@/assets/wallpapers/autumn-mountains-3.jpg";
import autumnMountains4 from "@/assets/wallpapers/autumn-mountains-4.jpg";
import quietLake1 from "@/assets/wallpapers/quiet-lake-1.jpg";
import quietLake2 from "@/assets/wallpapers/quiet-lake-2.jpg";
import quietLake3 from "@/assets/wallpapers/quiet-lake-3.jpg";
import quietLake4 from "@/assets/wallpapers/quiet-lake-4.jpg";

interface WallpaperItem {
  src: string;
  filename: string;
}

interface SlideData {
  title: string;
  description: string;
  wallpapers: WallpaperItem[];
}

const slides: SlideData[] = [
  {
    title: "Jarní louka",
    description: "Svěží zelené louky plné divokých květů přinášejí pocit klidu a obnovy",
    wallpapers: [
      { src: springMeadow1, filename: "jarni-louka-1.jpg" },
      { src: springMeadow2, filename: "jarni-louka-2.jpg" },
      { src: springMeadow3, filename: "jarni-louka-3.jpg" },
      { src: springMeadow4, filename: "jarni-louka-4.jpg" },
    ]
  },
  {
    title: "Jarní kopce", 
    description: "Mírně se vlnící kopce v jarním hávu nabízejí harmonii a vyrovnanost",
    wallpapers: [
      { src: springHills1, filename: "jarni-kopce-1.jpg" },
      { src: springHills2, filename: "jarni-kopce-2.jpg" },
      { src: springHills3, filename: "jarni-kopce-3.jpg" },
      { src: springHills4, filename: "jarni-kopce-4.jpg" },
    ]
  },
  {
    title: "Na horách na podzim",
    description: "Majestátní horské scenérie v podzimních barvách přinášejí sílu a inspiraci",
    wallpapers: [
      { src: autumnMountains1, filename: "podzimni-hory-1.jpg" },
      { src: autumnMountains2, filename: "podzimni-hory-2.jpg" },
      { src: autumnMountains3, filename: "podzimni-hory-3.jpg" },
      { src: autumnMountains4, filename: "podzimni-hory-4.jpg" },
    ]
  },
  {
    title: "Ticho na jezeře",
    description: "Klidná jezerní hladina vytváří prostor pro meditaci a vnitřní mír",
    wallpapers: [
      { src: quietLake1, filename: "ticho-jezero-1.jpg" },
      { src: quietLake2, filename: "ticho-jezero-2.jpg" },
      { src: quietLake3, filename: "ticho-jezero-3.jpg" },
      { src: quietLake4, filename: "ticho-jezero-4.jpg" },
    ]
  }
];

const downloadImage = async (src: string, filename: string) => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Chyba při stahování:', error);
  }
};

const WallpaperSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Hlavní nadpis a popis */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Pozadí pro váš telefon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stáhněte si krásná pozadí inspirovaná přírodou, která vám přinesou klid a pohodu přímo na váš mobilní telefon
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    {/* Nadpis a popis slide */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-muted-foreground max-w-xl mx-auto">
                        {slide.description}
                      </p>
                    </div>

                    {/* Grid s wallpapery */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                      {slide.wallpapers.map((wallpaper, wallpaperIndex) => (
                        <div 
                          key={wallpaperIndex}
                          className="relative group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          {/* Wallpaper preview */}
                          <div className="aspect-[9/16] relative overflow-hidden">
                            <img
                              src={wallpaper.src}
                              alt={`${slide.title} - varianta ${wallpaperIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            
                            {/* Overlay s tlačítkem stažení */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Button
                                onClick={() => downloadImage(wallpaper.src, wallpaper.filename)}
                                size="sm"
                                className="bg-primary/90 hover:bg-primary text-primary-foreground"
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Stáhnout
                              </Button>
                            </div>
                          </div>

                          {/* Název varianty */}
                          <div className="p-3">
                            <p className="text-sm text-muted-foreground text-center">
                              Varianta {wallpaperIndex + 1}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigační šipky - pouze na desktopu */}
            <CarouselPrevious className="hidden lg:flex -left-12 bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg" />
            <CarouselNext className="hidden lg:flex -right-12 bg-background/90 backdrop-blur-sm hover:bg-background border-2 shadow-lg" />
          </Carousel>

          {/* Indikátory */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Přejít na slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallpaperSection;