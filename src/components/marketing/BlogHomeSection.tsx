import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { getPosts } from "@/data/blog";

const BlogHomeSection = () => {
  const latest = getPosts().slice(0, 3);

  return (
    <section id="blog-novinky" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Nové terapeutické články</h2>
          <p className="mt-4 text-muted-foreground">Krátké, praktické tipy od týmu Calmory – pro klid během dne i večer.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="mt-8 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary story-link">
            Další články na blogu <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHomeSection;
