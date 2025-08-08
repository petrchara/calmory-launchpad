import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const STORAGE_KEY = "calmory_waitlist";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const record = { email, ts: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev]));
      toast.success("Děkujeme! Brzy se vám ozveme.");
      setEmail("");
      setAgree(false);
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
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Váš e‑mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail pro čekací listinu"
            required
          />
          <Button type="submit" variant="hero" disabled={loading}>
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
          Odesláním souhlasíte se zasíláním novinek. Vaše data jsou chráněna a
          kdykoliv se můžete odhlásit.
        </label>
      </div>
    </section>
  );
};

export default WaitlistForm;
