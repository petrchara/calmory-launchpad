import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/data/blog";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const BlogHomeSection = () => {
  const latest = getPosts().slice(0, 3);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="blog-novinky" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Nové terapeutické články</h2>
          <p className="mt-4 text-muted-foreground">Krátké, praktické tipy od týmu Calmory – pro klid během dne i večer. Najdete zde terapeutické texty, inspiraci a osobní zkušenosti, které vám pomohou lépe porozumět sobě i druhým. Objevte klidné příběhy, relaxační techniky a praktické rady pro duševní pohodu, hlubší spánek a vyrovnanější život.</p>
        </header>
        <div className="mb-8 flex justify-center md:justify-end">
          <Button asChild>
            <Link to="/blog" aria-label="Zobrazit vše – články">All</Link>
          </Button>
        </div>
        {/* Mobile carousel */}
        <div className="md:hidden mb-6">
          <Carousel setApi={setApi} opts={{ align: "start", containScroll: "trimSnaps" }}>
            <CarouselContent>
              {latest.map((p) => (
                <CarouselItem key={p.slug} className="basis-[85%]">
                  <Link to={`/blog/${p.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
                    <Card className="glass-card hover-scale h-full">
                      <CardContent className="p-0">
                        <AspectRatio ratio={1}>
                          <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover rounded-t-lg" />
                        </AspectRatio>
                        <div className="p-5">
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant="secondary">{p.category}</Badge>
                            <span className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("cs-CZ")}</span>
                          </div>
                          <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                          <div className="mt-4 inline-flex items-center gap-1 text-primary story-link">
                            <span>Číst článek</span>
                            <ArrowRight className="size-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-4 flex justify-center gap-2 md:hidden" aria-label="Posuvník článků – indikátory">
            {latest.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${current === i ? "bg-primary" : "bg-muted-foreground/40"}`}
                aria-label={`Přejít na snímek ${i + 1}`}
                aria-current={current === i ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {latest.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
              <Card className="glass-card hover-scale h-full">
                <CardContent className="p-0">
                  <AspectRatio ratio={1}>
                    <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover rounded-t-lg" />
                  </AspectRatio>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{p.category}</Badge>
                      <span className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("cs-CZ")}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-primary story-link">
                      <span>Číst článek</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogHomeSection;
