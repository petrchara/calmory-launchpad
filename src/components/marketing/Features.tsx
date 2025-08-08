import { CheckCircle2, Moon, Brain, CalendarCheck } from "lucide-react";

const features = [
  {
    title: "Krátká cvičení na každý den",
    description: "Praktické mikro‑náviky do 5 minut, které postupně posilují vaši psychickou odolnost.",
    icon: CheckCircle2,
  },
  {
    title: "Techniky založené na důkazech",
    description: "CBT, ACT a mindfulness techniky navržené s experty pro bezpečnou samopomoc.",
    icon: Brain,
  },
  {
    title: "Spánek, stres, nálada",
    description: "Přizpůsobené programy, sledování pokroku a jemná motivace bez tlaku.",
    icon: Moon,
  },
  {
    title: "Plány a připomínky",
    description: "Chytré připomínky a týdenní souhrny, které drží směr a tempo.",
    icon: CalendarCheck,
  },
];

const Features = () => {
  return (
    <section id="funkce" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Co vám Calmory přinese</h2>
          <p className="mt-4 text-muted-foreground">
            Praktický průvodce pro klidnější den – v kapse, kdykoliv ho potřebujete.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-xl p-6">
              <f.icon className="size-6 text-primary" />
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
