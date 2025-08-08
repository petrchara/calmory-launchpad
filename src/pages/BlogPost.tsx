import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getPostBySlug } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  useEffect(() => {
    if (!post) return;
    const title = `${post.title} – Calmory`;
    document.title = title.length > 60 ? `${post.title}` : title;

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", post.excerpt);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://calmoryapp.com/blog/${post.slug}`;

    const ldId = "calmory-blogpost-ld";
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
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image,
      "description": post.excerpt,
      "mainEntityOfPage": `https://calmoryapp.com/blog/${post.slug}`,
      "inLanguage": "cs-CZ"
    };
    ld.textContent = JSON.stringify(jsonLd);
  }, [post]);

  if (!post) {
    return (
      <main>
        <Navbar />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-2">Článek nenalezen</h1>
            <p className="text-muted-foreground mb-6">Možná byl přesunut nebo došlo k překlepu v adrese.</p>
            <Link to="/blog" className="text-primary underline-offset-4 hover:underline">Zpět na blog</Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary">{post.category}</Badge>
              <span>{new Date(post.date).toLocaleDateString("cs-CZ")}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </header>
          <AspectRatio ratio={1}>
            <img src={post.image} alt={post.alt} className="w-full h-full object-cover rounded-lg" loading="lazy" />
          </AspectRatio>
          <div className="mt-6 space-y-4 text-base leading-7 text-foreground/90">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/blog" className="text-primary underline-offset-4 hover:underline">← Zpět na přehled</Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogPost;
