import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, PauseCircle, Headphones, Video, Type, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Phase categories (daily moments)
const phases = [
  { id: "rano-rutina", label: "Ranní rutina", icon: "alarm-outline" },
  { id: "cesta-do", label: "Cesta do práce/školy", icon: "bus-outline" },
  { id: "obed", label: "Polední přestávka", icon: "restaurant-outline" },
  { id: "vecerni-klid", label: "Večerní klidová chvíle", icon: "moon-outline" },
  { id: "rodice", label: "Večerní rutina/rodiče s dětmi", icon: "sparkles-outline" },
] as const;

// Formats
type Format = { id: string; label: string; icon?: LucideIcon };
const formats: Format[] = [
  { id: "all", label: "Vše" },
  { id: "dychani", label: "Dýchání", icon: Headphones },
  { id: "meditace", label: "Meditace", icon: Headphones },
  { id: "afirmace", label: "Afirmace", icon: Type },
  { id: "hudba", label: "Hudba", icon: Headphones },
  { id: "usinani", label: "Příběhy na usínání", icon: Headphones },
];

// Sample library items (placeholders)
interface Item {
  id: string;
  title: string;
  phase: typeof phases[number]["id"];
  format: string;
  type: "audio" | "video" | "text";
  duration?: string;
  sample?: string; // media URL or text
}

const items: Item[] = [
  // Ranní rutina
  {
    id: "i1",
    title: "Dýchej, jen dýchej",
    phase: "rano-rutina",
    format: "dychani",
    type: "audio",
    duration: "3 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i2",
    title: "Lesní tanec bez hranic",
    phase: "rano-rutina",
    format: "hudba",
    type: "text",
    sample:
      "Skladba plná radosti, hravého pohybu a uvolnění. Pomalý rytmus jako bosé kroky na mechu, jemné perkuse a smyčce, které rozvibrovávají tělo i srdce.",
  },
  {
    id: "i13",
    title: "Sluneční dech",
    phase: "rano-rutina",
    format: "afirmace",
    type: "text",
    sample:
      "Představ si, jak teplé sluneční paprsky proudí po tvém těle s nádechem a přináší světlo a vděčnost. Každý výdech odnáší zbytky ospalosti.",
  },
  {
    id: "i14",
    title: "Lesní práh probuzení",
    phase: "rano-rutina",
    format: "meditace",
    type: "text",
    sample:
      "Zvuky ptáků, listí a tichý dech lesa tě zvou zpět k sobě. Ráno ti šeptá, že dnes máš prostor pro sebe.",
  },
  {
    id: "i15",
    title: "Kroky v mechu",
    phase: "rano-rutina",
    format: "hudba",
    type: "audio",
    duration: "3 min",
    sample: "/media/sample-audio.mp3",
  },

  // Cesta do práce/školy
  {
    id: "i3",
    title: "Rytmus cesty",
    phase: "cesta-do",
    format: "hudba",
    type: "audio",
    duration: "4 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i4",
    title: "Tanec bez pravidel",
    phase: "cesta-do",
    format: "hudba",
    type: "text",
    sample:
      "Jemná, živá skladba plná pohybu a lehkosti. Letní tanec bez hranic – svobodný, hravý, vroucný. Hudba, která tě zve pohybem zpět k sobě.",
  },
  {
    id: "i16",
    title: "Dech do kroku",
    phase: "cesta-do",
    format: "dychani",
    type: "text",
    sample:
      "Krátká technika: nádech na čtyři kroky, výdech na šest. Rytmus pohybu kol uklidňuje mysl, tělo zůstává klidné.",
  },
  {
    id: "i17",
    title: "Okno do ticha",
    phase: "cesta-do",
    format: "meditace",
    type: "text",
    sample:
      "Otevři okno do ticha – z autobusu nebo vlaku sleduj krajinu a dýchej. Mysl se do ticha vrací sama.",
  },
  {
    id: "i18",
    title: "Pevný v sobě",
    phase: "cesta-do",
    format: "afirmace",
    type: "text",
    sample: "Jsem pevný/á, jsem v sobě. Každý nádech mě vrací domů.",
  },

  // Polední přestávka
  {
    id: "i5",
    title: "Kruhy na vodě a ty",
    phase: "obed",
    format: "meditace",
    type: "text",
    sample:
      "Na hladinu dopadá jemný déšť. Vznikají kruhy – jako myšlenky a pocity. Hudba tě nese jako klidná voda, bez cíle a bez tlaku.",
  },
  {
    id: "i6",
    title: "Vzpomínka vonící tichem",
    phase: "obed",
    format: "meditace",
    type: "text",
    sample:
      "Zavřené oči, dech se zpomalí, v dálce obzory. Pomalý klavír a jemné smyčce připomínají chvíli, kdy bylo všechno v pořádku.",
  },
  {
    id: "i19",
    title: "Polední nádech",
    phase: "obed",
    format: "dychani",
    type: "audio",
    duration: "2 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i20",
    title: "Jsem tady pro sebe",
    phase: "obed",
    format: "afirmace",
    type: "text",
    sample: "Zastavuji se, abych mohl/a pokračovat. Hudba jako jemný dech vyrovnává.",
  },
  {
    id: "i21",
    title: "Hudba poledního klidu",
    phase: "obed",
    format: "hudba",
    type: "audio",
    duration: "3 min",
    sample: "/media/sample-audio.mp3",
  },

  // Večerní klidová chvíle
  {
    id: "i7",
    title: "Aurinka – Srdce lesa",
    phase: "vecerni-klid",
    format: "hudba",
    type: "audio",
    duration: "5 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i8",
    title: "Kruhy na vodě",
    phase: "vecerni-klid",
    format: "meditace",
    type: "audio",
    duration: "6 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i9",
    title: "Bubny na jezeře",
    phase: "vecerni-klid",
    format: "hudba",
    type: "text",
    sample:
      "Pravidelný tlukot jemných bubnů, vlnění těla a odplouvající stres. Zůstává jen klid, mír a láska.",
  },
  {
    id: "i22",
    title: "Srdce slyší déšť",
    phase: "vecerni-klid",
    format: "hudba",
    type: "text",
    sample:
      "Kapky deště dopadají na hladinu jezera. Jemný rytmus djembe jako tlukot srdce v klidu. Hudba návratu domů.",
  },
  {
    id: "i23",
    title: "Klarinet v tichu",
    phase: "vecerni-klid",
    format: "hudba",
    type: "text",
    sample:
      "Pomalé klarinetové linky a jemné smyčce hladí vzduch. Hudba večerní něhy a tichého světla.",
  },
  {
    id: "i24",
    title: "Dech pro večer",
    phase: "vecerni-klid",
    format: "dychani",
    type: "audio",
    duration: "3 min",
    sample: "/media/sample-audio.mp3",
  },

  // Večerní rutina/rodiče s dětmi
  {
    id: "i10",
    title: "Aurinka lesní víla",
    phase: "rodice",
    format: "hudba",
    type: "text",
    sample:
      "Jemná, pečující skladba jako dotek lesní víly. Harfové vrstvy a zemitá brumenda plynou jako míza pod lesní půdou.",
  },
  {
    id: "i11",
    title: "Levandulové nebe",
    phase: "rodice",
    format: "hudba",
    type: "audio",
    duration: "4 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i12",
    title: "Ozvěny chaty u jezera",
    phase: "rodice",
    format: "usinani",
    type: "audio",
    duration: "7 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i25",
    title: "Společný dech",
    phase: "rodice",
    format: "dychani",
    type: "text",
    sample: "Rodič a dítě dýchají spolu, rytmus uklidňuje. Každý nádech přináší klid.",
  },
  {
    id: "i26",
    title: "Klidná náruč",
    phase: "rodice",
    format: "afirmace",
    type: "text",
    sample: "Jsem tady s tebou. V bezpečí, v teple, spolu usínáme do klidu.",
  },
  {
    id: "i27",
    title: "Pohádka o kapkách",
    phase: "rodice",
    format: "usinani",
    type: "audio",
    duration: "6 min",
    sample: "/media/sample-audio.mp3",
  },
];

const ContentLibrary = () => {
  const [activePhase, setActivePhase] = useState<typeof phases[number]["id"]>(phases[0].id);
  const [activeFormat, setActiveFormat] = useState<string>("all");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return items.filter((it) => it.phase === activePhase && (activeFormat === "all" || it.format === activeFormat));
  }, [activePhase, activeFormat]);

  const onPlay = (id: string) => setPlayingId((p) => (p === id ? null : id));

  return (
    <section id="knihovna" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Knihovna obsahu</h2>
          <p className="mt-4 text-muted-foreground">Procházejte krátké ukázky podle denní fáze a formátu.</p>
        </header>

        {/* Phases selector */}
        <div className="relative -mx-6 px-6 overflow-x-auto pb-2 mb-6">
          <div className="flex gap-2 min-w-max">
            {phases.map((p) => (
              <Button
                key={p.id}
                variant={p.id === activePhase ? "default" : "secondary"}
                size="sm"
                onClick={() => setActivePhase(p.id)}
                aria-pressed={p.id === activePhase}
                className="rounded-full"
                title={`${p.label}`}
              >
                <ion-icon name={p.icon} className="mr-2" aria-hidden="true"></ion-icon>
                {p.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Format filters */}
        <Tabs value={activeFormat} onValueChange={(v) => setActiveFormat(v as any)} className="mb-6">
          <TabsList className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <TabsTrigger key={f.id} value={f.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {f.icon ? <f.icon className="mr-2 size-4" /> : null}
                {f.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it) => (
            <Card key={it.id} className="glass-card animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{it.title}</CardTitle>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="secondary">{formats.find((f) => f.id === it.format)?.label}</Badge>
                      {it.duration ? <span className="text-xs text-muted-foreground">{it.duration}</span> : null}
                    </div>
                  </div>
                  {it.type !== "text" ? (
                    <Button variant="outline" size="sm" onClick={() => onPlay(it.id)} aria-label="Přehrát ukázku">
                      {playingId === it.id ? (
                        <PauseCircle className="size-4" />
                      ) : it.type === "audio" ? (
                        <PlayCircle className="size-4" />
                      ) : (
                        <Video className="size-4" />
                      )}
                    </Button>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent>
                {it.type === "audio" && playingId === it.id && it.sample ? (
                  <audio className="w-full" controls autoPlay src={it.sample} aria-label={`Ukázka: ${it.title}`}></audio>
                ) : null}
                {it.type === "video" && playingId === it.id && it.sample ? (
                  <video className="w-full rounded" controls autoPlay src={it.sample} aria-label={`Ukázka: ${it.title}`}></video>
                ) : null}
                {it.type === "text" && it.sample ? (
                  <p className="text-sm text-muted-foreground">{it.sample}</p>
                ) : null}
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-sm text-muted-foreground">Pro tuto kombinaci zatím nemáme ukázky. Zkuste jiný formát.</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
