export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  author: string;
  category: string;
  image: string; // public path
  alt: string;
  content: string[]; // simple paragraphs for now
};

const posts: BlogPost[] = [
  {
    slug: "vdech-vydech-proti-stresu",
    title: "Vdech–výdech: rychlá technika proti stresu",
    excerpt: "Krátké cvičení vědomého dechu, které zvládnete kdekoli během dne.",
    date: "2025-05-20",
    author: "Tým Calmory",
    category: "Mindfulness",
    image: "/placeholder.svg",
    alt: "Ilustrační 1:1 náhled mindfulness dýchání",
    content: [
      "Dech je nejrychlejší způsob, jak zklidnit nervový systém. Zkuste poměr 4–4: nádech na 4 doby, výdech na 4 doby, 1–2 minuty.",
      "Sedněte si rovně, uvolněte ramena. Vnímejte, jak s nádechem roste prostor v hrudníku a s výdechem klesá napětí.",
      "Pro hlubší účinek přejděte na 4–6 (delší výdech aktivuje parasympatikus)."
    ]
  },
  {
    slug: "jak-pracovat-s-uzkosti",
    title: "Jak pracovat s úzkostí: 3 jemné kroky",
    excerpt: "Tělo, dech a pozornost. Praktický mininávod pro náročné chvíle.",
    date: "2025-06-02",
    author: "Tým Calmory",
    category: "Psychologie",
    image: "/placeholder.svg",
    alt: "Ilustrační 1:1 náhled – práce s úzkostí",
    content: [
      "Když přijde úzkost, začněte u těla: opřete chodidla o zem, pojmenujte 3 věci, které vidíte.",
      "Zjemněte dech a přidejte dotek (položte dlaň na hrudník). Dovolte pocitu být, místo boje zkuste zvědavost.",
      "Zakončete návratem k činnosti, která je drobná a dosažitelná (např. napít se vody)."
    ]
  },
  {
    slug: "vecerni-ritual-pro-lepsi-spanek",
    title: "Večerní rituál pro lepší spánek",
    excerpt: "Krátká rutina na 10 minut: ztišení, dech, jemné protažení a vděčnost.",
    date: "2025-07-01",
    author: "Tým Calmory",
    category: "Spánek",
    image: "/placeholder.svg",
    alt: "Ilustrační 1:1 náhled – večerní rituál",
    content: [
      "Ztlumte světla a odložte obrazovky. Dvě minuty vědomého dýchání nos–nos.",
      "Tři pomalé předklony v sedě, uvolnění šíje a čelistí. Sepsání 3 drobných vděčností.",
      "Zakončete kratší nahrávkou z Calmory pro usínání nebo zvuky přírody."
    ]
  }
];

export const getPosts = () =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export default posts;
