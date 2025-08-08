import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experts = [
  {
    name: "MUDr. Jana Nováková",
    role: "Klinická psycholožka",
    specialties: "CBT, úzkost, stres",
    bio: "Pomáhá lidem zvládat úzkost a stres pomocí kognitivně‑behaviorálních technik.",
    image: "/placeholder.svg",
  },
  {
    name: "Mgr. Petr Svoboda",
    role: "Psychoterapeut",
    specialties: "ACT, mindfulness",
    bio: "Věnuje se akceptačně‑závazkové terapii a vědomé pozornosti v každodenním životě.",
    image: "/placeholder.svg",
  },
  {
    name: "PhDr. Klára Dvořáková",
    role: "Specialistka na spánek",
    specialties: "Spánková hygiena",
    bio: "Pomáhá nastavovat zdravé rituály a režim pro kvalitnější spánek.",
    image: "/placeholder.svg",
  },
  {
    name: "Mgr. Adéla Krejčí",
    role: "Fyzioterapeutka dechu",
    specialties: "Dechové techniky",
    bio: "Zaměřuje se na práci s dechem a tělem pro snížení napětí a zlepšení spánku.",
    image: "/placeholder.svg",
  },
];

const Experts = () => {
  return (
    <section id="experti" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Naši odborníci</h2>
          <p className="mt-4 text-muted-foreground">Tvoříme obsah s certifikovanými odborníky. Evidence‑based, s důrazem na bezpečí a etiku.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((e) => (
            <Card key={e.name} className="glass-card animate-fade-in">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="size-14">
                  <AvatarImage src={e.image} alt={`Foto experta ${e.name}`} />
                  <AvatarFallback>{e.name.split(" ").map((p) => p[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{e.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{e.role} · {e.specialties}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{e.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
