import { useEffect } from "react";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import ContentCarousel from "@/components/marketing/ContentCarousel";
import WaitlistForm from "@/components/marketing/WaitlistForm";
import Testimonials from "@/components/marketing/Testimonials";
import Trust from "@/components/marketing/Trust";
import Experts from "@/components/marketing/Experts";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Calmory App – terapeutická mobilní aplikace";
    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", "Calmory App pomáhá zvládat stres a úzkost. Připojte se k čekací listině a získejte brzký přístup.");

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://calmoryapp.com/";

    const ldId = "calmory-ld-json";
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
      "@type": "SoftwareApplication",
      "name": "Calmory App",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "iOS, Android",
      "description": "Terapeutická mobilní aplikace pro zvládání stresu a úzkosti.",
      "url": "https://calmoryapp.com/"
    };
    ld.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ContentCarousel />
      <Testimonials />
      <Trust />
      <WaitlistForm />
      <Experts />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
