import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const STORAGE_KEY = "calmory_waitlist";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
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
    if (!agree) {
      toast.warning("Prosím potvrďte souhlas se zasíláním novinek.");
      return;
    }

    setLoading(true);
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const exists = prev.find((p: any) => p.email?.toLowerCase() === email.toLowerCase());
      if (exists) {
        toast.success("Děkujeme! Tento e‑mail už je na seznamu.");
        setEmail("");
        setAgree(false);
        setName("");
        return;
      }

      const record = {
        email,
        name: name || undefined,
        consent: agree,
        source: "waitlist-section",
        ...meta,
        created_at: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev]));
      toast.success("Děkujeme! Brzy se vám ozveme.");
      setEmail("");
      setAgree(false);
      setName("");
    } catch (e) {
      toast.error("Něco se pokazilo. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cekaci-listina" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Připojte se k čekací listině</h2>
          <p className="mt-4 text-muted-foreground">
            Získejte brzký přístup, slevu pro první uživatele a praktické tipy pro klidnější den.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto grid sm:grid-cols-[1fr_1fr_auto] gap-3">
          <Input
            type="text"
            placeholder="Jméno (nepovinné)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Jméno"
          />
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
          <Button type="submit" variant="hero" disabled={loading} className="hover-scale">
            {loading ? "Odesílám…" : "Chci být u toho"}
          </Button>
        </form>
        <label className="mt-3 flex items-start gap-2 max-w-xl mx-auto text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-1"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            aria-label="Souhlasím se zasíláním novinek"
          />
          Odesláním souhlasíte se zasíláním novinek a se zpracováním osobních údajů dle
          <a href="#" className="story-link ml-1">Zásad ochrany osobních údajů</a>. Odhlášení kdykoliv jedním klikem.
        </label>
      </div>
    </section>
  );
};

export default WaitlistForm;
