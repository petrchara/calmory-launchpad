import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, PauseCircle, Headphones, Video, Type, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Phase categories (daily moments)
const phases = [
  { id: "rano-rutina", label: "Ranní rutina", emoji: "🌅" },
  { id: "kava", label: "Ranní káva/snídaně", emoji: "☕" },
  { id: "cesta-do", label: "Cesta do práce/školy", emoji: "🚗" },
  { id: "dopoledne", label: "Krátká dopolední pauza", emoji: "☀️" },
  { id: "obed", label: "Polední přestávka", emoji: "🥗" },
  { id: "denni-rutina", label: "Pravidelná denní rutina", emoji: "🔁" },
  { id: "odpoledni-unava", label: "Odpolední únava", emoji: "💤" },
  { id: "cesta-zpět", label: "Cesta z práce/školy domů", emoji: "🚌" },
  { id: "vecerni-klid", label: "Večerní klidová chvíle", emoji: "🌇" },
  { id: "vecerni-rutina", label: "Večerní rutina/usínání", emoji: "🌙🛏️" },
  { id: "rodice", label: "Večerní rutina/rodiče s dětmi", emoji: "📖😴" },
  { id: "vikend", label: "Víkendový čas", emoji: "🧘🌿" },
  { id: "dovolena", label: "Dovolená/prázdniny", emoji: "🏖️🏔️🧘‍♀️👨‍👩‍👧‍👦" },
] as const;

// Formats
type Format = { id: string; label: string; icon?: LucideIcon };
const formats: Format[] = [
  { id: "all", label: "Vše" },
  { id: "dychani", label: "Dýchání", icon: Headphones },
  { id: "meditace", label: "Meditace", icon: Headphones },
  { id: "afirmace", label: "Afirmace", icon: Type },
  { id: "hudba", label: "Hudba", icon: Headphones },
  { id: "priroda", label: "Zvuky přírody", icon: Headphones },
  { id: "meditace-pribeh", label: "Meditace s příběhem", icon: Headphones },
  { id: "usinani", label: "Příběhy na usínání", icon: Headphones },
  { id: "vyzvy", label: "Výzvy a úkoly", icon: ListChecks },
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
  {
    id: "i1",
    title: "1–2 minuty vědomého dechu",
    phase: "rano-rutina",
    format: "dychani",
    type: "audio",
    duration: "2 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i2",
    title: "Jemná 3min ranní meditace",
    phase: "kava",
    format: "meditace",
    type: "audio",
    duration: "3 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i3",
    title: "Afirmace na sebe‑soucit",
    phase: "dopoledne",
    format: "afirmace",
    type: "text",
    sample: "Jsem k sobě laskavý/á. Dýchám, nechávám odejít napětí.",
  },
  {
    id: "i4",
    title: "Zvuky moře",
    phase: "obed",
    format: "priroda",
    type: "audio",
    duration: "1 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i5",
    title: "Krátká večerní meditace",
    phase: "vecerni-klid",
    format: "meditace",
    type: "video",
    duration: "5 min",
    sample: "/media/sample-video.mp4",
  },
  {
    id: "i6",
    title: "Příběh na usínání: Klidná louka",
    phase: "vecerni-rutina",
    format: "usinani",
    type: "audio",
    duration: "8 min",
    sample: "/media/sample-audio.mp3",
  },
  {
    id: "i7",
    title: "Mini‑výzva: 3 vděčnosti",
    phase: "denni-rutina",
    format: "vyzvy",
    type: "text",
    sample: "Zapište si 3 věci, za které dnes děkujete.",
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
                <span className="mr-1" aria-hidden>
                  {p.emoji}
                </span>
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
