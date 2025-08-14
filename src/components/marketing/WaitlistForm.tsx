import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import waitlistBg from "@/assets/calmory-hero.jpg";
import { Info, Sparkles } from "lucide-react";

const STORAGE_KEY = "calmory_waitlist";

const WaitlistForm = () => {
  
  const [email, setEmail] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [hp, setHp] = useState(""); // honeypot
  const [meta, setMeta] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    referrer: "",
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setMeta({
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        referrer: document.referrer || "",
      });
    } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot ochrana
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Zadejte platný e‑mail.");
      return;
    }

    setLoading(true);
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const exists = prev.find((p: any) => p.email?.toLowerCase() === email.toLowerCase());
      if (exists) {
        toast.success("Děkujeme! Tento e‑mail už je na seznamu.");
        setEmail("");
        return;
      }

      const record = {
        email,
        source: "waitlist-section",
        ...meta,
        created_at: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev]));
      toast.success("Děkujeme! Brzy se vám ozveme.");
      setEmail("");
      
      
    } catch (e) {
      toast.error("Něco se pokazilo. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cekaci-listina" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={waitlistBg}
          alt="Calmory pozadí — ilustrační fotografie"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-transparent" aria-hidden="true" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            <span className="block">Přidejte se a objevte Calmory</span>
            <span className="block">dřív než ostatní</span>
          </h2>
          <span className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/60 text-secondary-foreground">
            <Sparkles className="size-4" /> Spuštění za 2 měsíce
          </span>
          <p className="mt-4 text-muted-foreground">
            Získejte brzký přístup k aplikaci a bonusové tipy pro zvládání stresu, zlepšení spánku a podporu dobré nálady. Stačí zadat svůj e-mail a my vám dáme vědět, až si Calmory budete moci stáhnout jako první.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto grid sm:grid-cols-[1fr_auto] gap-3">
          <Input
            type="email"
            placeholder="Váš e‑mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail pro čekací listinu"
            required
          />
          {/* Honeypot pro ochranu proti botům */}
          <input
            type="text"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
          />
          <Button type="submit" disabled={loading} className="hover-scale">
            {loading ? "Odesílám…" : "Přidat se pro přednostní přístup"}
          </Button>
        </form>
        <div className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground flex items-start justify-center gap-2 text-center">
          <Info className="size-4 mt-0.5" aria-hidden="true" />
          <span>Vaši adresu použijeme jen k informování o spuštění aplikace a zaslání slíbených bonusů.</span>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
