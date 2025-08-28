import { useState } from "react";
import { CheckCircle2, Heart, Brain, Moon, Play, Download, Star, BookOpen, Leaf, Gift, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormatColor } from "@/lib/content-colors";

const EmailTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("newsletter");

  const contentTypes = [
    {
      format: "meditace",
      title: "Řízené meditace",
      description: "5-15 minutové meditace pro začátečníky i pokročilé",
      icon: Brain,
    },
    {
      format: "dychani",
      title: "Dechová cvičení",
      description: "Techniky pro okamžité uklidnění a snížení stresu",
      icon: Heart,
    },
    {
      format: "usinani",
      title: "Podpora spánku",
      description: "Relaxační příběhy a zvuky pro klidný spánek",
      icon: Moon,
    },
    {
      format: "hudba",
      title: "Terapeutická hudba",
      description: "Hudba navržená pro relaxaci a soustředění",
      icon: Play,
    },
  ];

  const templates = {
    newsletter: {
      subject: "Novinky z Calmory: Ta druhá, Odlož den a tip na klid offline 🍃",
      preheader: "Meditace, příběh a tip – vaše malá dávka klidu na tento týden.",
      title: "Novinky z Calmory",
      subtitle: "Vaše týdenní dávka klidu",
      cta: "Vyzkoušet Calmory"
    },
    launch: {
      subject: "🌟 Calmory už brzy - Vaše klidná mysl čeká",
      preheader: "Připravte se na revoluci v terapeutické péči o duševní zdraví.",
      title: "Calmory přichází za 2 měsíce",
      subtitle: "Připravte se na revolutionizující terapeutickou aplikaci",
      cta: "Získat časný přístup"
    },
    content: {
      subject: "🧘 Objevte sílu řízených meditací s Calmory",
      preheader: "Praktické techniky pro váš lepší den již brzy ve vaší kapse.",
      title: "Každý den klidnější mysl",
      subtitle: "Praktické techniky pro váš lepší den",
      cta: "Vyzkoušet zdarma"
    },
    countdown: {
      subject: "⏰ Pouze 30 dní do spuštění Calmory",
      preheader: "Buďte mezi prvními, kdo si vyzkouší revolutionizující aplikaci.",
      title: "Odpočítávání začalo",
      subtitle: "Buďte mezi prvními, kdo si vyzkouší Calmory",
      cta: "Rezervovat místo"
    }
  };

  const heroTitles = [
    "Díky za předregistraci",
    "Vyzkoušejte meditace", 
    "Naši odborníci doporučují",
    "Recenze zapojených lidí",
    "Ukázky vzhledu aplikace",
    "Doporučte Calmory známým",
    "Recenze influencerů",
    "Naše sociální sítě"
  ];

  const showcaseContent = [
    {
      icon: Brain,
      title: "Řízené meditace",
      description: "Krátké praxe pro každodenní klid",
      format: "meditace",
      link: "https://dev.calmoryapp.com/#registrace"
    },
    {
      icon: Heart,
      title: "Dechová cvičení", 
      description: "Techniky pro okamžité uklidnění",
      format: "dychani",
      link: "https://dev.calmoryapp.com/#registrace"
    },
    {
      icon: Moon,
      title: "Podpora spánku",
      description: "Relaxační příběhy na dobrou noc",
      format: "usinani", 
      link: "https://dev.calmoryapp.com/#registrace"
    }
  ];

  const newsletterContent = [
    {
      icon: Brain,
      title: "🧘‍♀️ Meditace týdne: Odlož den",
      description: "Krátká praxe, která vám pomůže uvolnit napětí a odložit tíhu každodennosti.",
      link: "https://dev.calmoryapp.com/#registrace",
      format: "meditace"
    },
    {
      icon: BookOpen,
      title: "📖 Článek týdne: Ta druhá",
      description: "Příběh dvou sester, které se přestaly srovnávat a začaly růst vedle sebe. O přijetí, blízkosti i rozdílnosti.",
      link: "https://calmoryapp.com/cs/a-600-ta-druha",
      format: "pribeh"
    },
    {
      icon: Leaf,
      title: "🌿 Offline tip Calmory",
      description: "Vytvořte si doma malý ostrůvek klidu: zapalte svíčku, odložte telefon a nalaďte se na dech.",
      link: "https://dev.calmoryapp.com/#registrace",
      format: "tip"
    }
  ];

  const bonusOptions = [
    "Brzy nové pohádky na spaní 🌙",
    "\"Aplikace mi pomohla najít klid i v nejrušnějších dnech.\" - Uživatel",
    "Příští týden: Řízené dýchání pro začátečníky",
    "Denní afirmace: Jsem v klidu a přijímám tento moment takový, jaký je."
  ];

  const currentTemplate = templates[selectedTemplate as keyof typeof templates];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Template Selector */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Email Marketing Šablony - Calmory</h1>
          <div className="flex gap-2 mb-6">
            {Object.keys(templates).map((key) => (
              <Button
                key={key}
                variant={selectedTemplate === key ? "default" : "outline"}
                onClick={() => setSelectedTemplate(key)}
                className="capitalize"
              >
                {key === "newsletter" && "Newsletter"}
                {key === "launch" && "Spuštění"}
                {key === "content" && "Obsah"}
                {key === "countdown" && "Odpočítávání"}
              </Button>
            ))}
          </div>
        </div>

        {/* Email Preview */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl mx-auto">
          {/* Email Header */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Calmory</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Předmět: {currentTemplate.subject}
            </p>
            {currentTemplate.preheader && (
              <p className="text-xs text-muted-foreground mt-1">
                Náhled: {currentTemplate.preheader}
              </p>
            )}
          </div>

          {/* Email Body */}
          <div className="p-6">
            {/* Hero Section */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{currentTemplate.title}</h2>
              <p className="text-muted-foreground mb-6">{currentTemplate.subtitle}</p>
              
              {selectedTemplate === "countdown" && (
                <div className="flex justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30</div>
                    <div className="text-xs text-muted-foreground">DNÍ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">HODIN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">45</div>
                    <div className="text-xs text-muted-foreground">MINUT</div>
                  </div>
                </div>
              )}
            </div>

            {/* Newsletter Content */}
            {selectedTemplate === "newsletter" && (
              <div className="mb-8 space-y-8">
                {/* Hero Title Options */}
                <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">Hero nadpis (vyberte jeden):</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {heroTitles.map((title, index) => (
                      <div key={index} className="text-sm p-2 bg-white/50 rounded border-l-2 border-primary/30">
                        {title}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic Countdown */}
                <div className="text-center bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-4 mb-6">
                  <p className="text-lg font-semibold text-primary mb-2">Již za 8 týdnů bude aplikace ke stažení! 📱</p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">56</div>
                      <div className="text-xs text-muted-foreground">DNÍ</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">8</div>
                      <div className="text-xs text-muted-foreground">HODIN</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">23</div>
                      <div className="text-xs text-muted-foreground">MINUT</div>
                    </div>
                  </div>
                </div>

                {/* Content Showcase - 3 blocks side by side */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-center">Ukázka obsahu / Vyzkoušejte</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {showcaseContent.map((item, index) => {
                      const colors = getFormatColor(item.format);
                      return (
                        <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" 
                               style={{ backgroundColor: colors.background }}>
                            <item.icon className="w-6 h-6" style={{ color: colors.text }} />
                          </div>
                          <Badge 
                            className="mb-2" 
                            style={{ backgroundColor: colors.background, color: colors.text }}
                          >
                            {item.format}
                          </Badge>
                          <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                          <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              Vyzkoušet →
                            </a>
                          </Button>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter Weekly Content */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-center">Týdenní obsah</h3>
                  <div className="space-y-4">
                    {newsletterContent.map((item, index) => {
                      const colors = getFormatColor(item.format);
                      return (
                        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                 style={{ backgroundColor: colors.background }}>
                              <item.icon className="w-5 h-5" style={{ color: colors.text }} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start gap-2 mb-2">
                                <h4 className="font-semibold text-sm flex-1">{item.title}</h4>
                                <Badge 
                                  className="text-xs" 
                                  style={{ backgroundColor: colors.background, color: colors.text }}
                                >
                                  {item.format}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                              <Button variant="outline" size="sm" asChild>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                  Zobrazit →
                                </a>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Bonus Material Section */}
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="font-semibold mb-4 text-center">🎁 Bonusový materiál týdne</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Zdarma ke stažení: Průvodce klidným dnem</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        PDF s praktickými tipy a cvičeními, která vám pomohou najít klid v každé situaci. 
                        Ideální pro začátečníky i pokročilé.
                      </p>
                      <Button size="sm" className="w-full sm:w-auto">
                        <Download className="w-4 h-4 mr-2" />
                        Stáhnout zdarma
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Blog Section with #CalmStories */}
                <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-2">📝 Blog #CalmStories</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Sdílejte své příběhy klidu a inspirujte ostatní. Označte své příspěvky hashtagem #CalmStories.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                          #CalmStories
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                          #Calmory
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                          #Mindfulness
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Review Section */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic mb-2">
                      "Už po týdnu používání Calmory cítím obrovskou změnu. Meditace mi pomáhají zvládat stres a najít klid i v nejrušnějších dnech."
                    </p>
                    <p className="text-xs text-muted-foreground">- Marie K., beta testerka</p>
                  </div>
                </div>
              </div>
            )}

            {/* Content Types */}
            {selectedTemplate === "content" && (
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-center">Co pro vás připravujeme</h3>
                <div className="grid grid-cols-2 gap-3">
                  {contentTypes.map((type) => {
                    const colors = getFormatColor(type.format);
                    return (
                      <Card key={type.format} className="p-3">
                        <div className="flex items-start gap-2">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ 
                              backgroundColor: colors.background,
                              color: colors.text 
                            }}
                          >
                            <type.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{type.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Features for Launch Template */}
            {selectedTemplate === "launch" && (
              <div className="mb-8">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Krátká cvičení na každý den (5 minut)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Techniky založené na důkazech (CBT, ACT)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Pomoc se spánkem, stresem a náladou</span>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="text-center mb-6">
              <Button size="lg" className="w-full sm:w-auto px-8">
                {currentTemplate.cta}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="bg-muted/30 rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm italic mb-2">
                  "Konečně aplikace, která skutečně pomáhá s každodenním stresem. Těším se na plnou verzi!"
                </p>
                <p className="text-xs text-muted-foreground">- Beta tester</p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-muted-foreground border-t pt-4">
              <p className="mb-4">© 2024 Calmory. Všechna práva vyhrazena.</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mb-4">
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex justify-center gap-4">
                <a href="#" className="hover:text-foreground">Zásady ochrany</a>
                <a href="#" className="hover:text-foreground">Odhlásit</a>
                <a href="mailto:hello@calmoryapp.com" className="hover:text-foreground">Kontakt</a>
              </div>
            </div>
          </div>
        </div>

        {/* Email Code Export */}
        <div className="mt-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Export HTML pro email klienty</h3>
            <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
              <div className="text-muted-foreground">
                {`<!-- Připravený HTML kód pro ${selectedTemplate} šablonu -->`}
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Stáhnout HTML
              </Button>
              <Button variant="outline" size="sm">
                Kopírovat kód
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;