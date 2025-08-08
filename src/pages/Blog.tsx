import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPosts } from "@/data/blog";

const Blog = () => {
  const allPosts = getPosts();
  const categories = useMemo(() => ["all", ...Array.from(new Set(allPosts.map((p) => p.category)))], [allPosts]);
  const [active, setActive] = useState<string>("all");
  const posts = useMemo(() => (active === "all" ? allPosts : allPosts.filter((p) => p.category === active)), [active, allPosts]);

  useEffect(() => {
    document.title = "Blog Calmory – terapeutické články";
    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", "Nové terapeutické články Calmory: mindfulness, práce s úzkostí, spánek.");

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://calmoryapp.com/blog";

    const ldId = "calmory-blog-ld";
    let ld = document.getElementById(ldId);
    if (!ld) {
      const s = document.createElement("script");
      s.setAttribute("type", "application/ld+json");
      s.id = ldId;
      document.head.appendChild(s);
      ld = s;
    }
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Calmory Blog",
      "url": "https://calmoryapp.com/blog",
      "inLanguage": "cs-CZ"
    };
    ld.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main>
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <header className="max-w-2xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Blog Calmory – terapeutické články</h1>
            <p className="mt-4 text-muted-foreground">Praktické návody a laskavé tipy pro klidnější den.</p>
          </header>

          {/* Kategorie filtrování */}
          <Tabs value={active} onValueChange={(v) => setActive(v)} className="mb-6">
            <TabsList className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {c === "all" ? "Vše" : c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
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
                      <h2 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                      <span className="mt-4 inline-block text-sm text-primary story-link">Číst článek</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <p className="mt-6 text-center text-sm text-muted-foreground">Pro vybranou kategorii zatím nemáme články.</p>
          ) : null}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
