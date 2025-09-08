import { useState } from "react";
import { CheckCircle2, Heart, Brain, Moon, Play, Download, Star, BookOpen, Leaf, Gift, Facebook, Instagram, Youtube, Smartphone, ExternalLink, AlertTriangle, Info, Mail, Users, Clock, Settings, X, Smile, Meh, Frown, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormatColor } from "@/lib/content-colors";

const EmailTemplate = () => {
  const [selectedMainTab, setSelectedMainTab] = useState("email");
  const [selectedTemplate, setSelectedTemplate] = useState("newsletter");
  const [selectedModalTab, setSelectedModalTab] = useState("reflexe");

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
      title: "Díky za předregistraci",
      subtitle: "Vítejte v komunitě lidí, kteří hledají cestu ke klidnější mysli. Připravili jsme pro vás speciální výběr terapeutických obsahů - meditaci 'Odlož den', inspirativní příběh o přijetí rozdílnosti a praktický tip pro vytvoření klidu ve vašem domově.",
      cta: "Vyzkoušet Calmory"
    },
    launch: {
      subject: "📧 App Store Connect - Delivery notification",
      preheader: "Notification about your recent app delivery - CalmoryApp.",
      title: "Systémová šablona",
      subtitle: "Vzorová šablona s různými UI elementy pro systémové a administrativní e-maily",
      cta: "Další informace"
    },
    content: {
      subject: "📱 Podívejte se na vzhled aplikace Calmory",
      preheader: "Nahlédněte do budoucí aplikace pro terapeutickou péči o duševní zdraví.",
      title: "Ukázky vzhledu aplikace",
      subtitle: "Podívejte se, jak bude vypadat vaše cesta ke klidnější mysli. Připravujeme intuitivní rozhraní, které vám pomůže najít klid kdykoliv a kdekoliv to potřebujete.",
      cta: "Předregistrovat se"
    },
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
      description: "Krátké praxe pro každodenní klid. Objevte sílu mindfulness a naučte se techniky, které vám pomohou najít vnitřní rovnováhu. Ideální pro začátečníky i pokročilé. Každá meditace je navržena tak, aby vás provázela krokem za krokem k hlubšímu pocitu klidu a soustředění.",
      format: "meditace",
      link: "https://dev.calmoryapp.com/#registrace",
      image: "/lovable-uploads/3bc3a236-0f65-484f-a051-5a826f131023.png"
    },
    {
      icon: Heart,
      title: "Dechová cvičení", 
      description: "Techniky pro okamžité uklidnění. Naučte se ovládat svůj dech a tím i své emoce. Proven metody pro snížení stresu a úzkosti. Jednoduché cvičení, které si můžete zopakovat kdykoliv během dne. Perfektní pro zvládnutí náročných situací a okamžité uvolnění napětí.",
      format: "dychani",
      link: "https://dev.calmoryapp.com/#registrace",
      image: "/lovable-uploads/6f0529c6-e167-4efa-b76e-f55d10237a5c.png"
    },
    {
      icon: Moon,
      title: "Podpora spánku",
      description: "Relaxační příběhy na dobrou noc. Klidné narace a uklidňující zvuky, které vám pomohou usnout. Speciálně navržené pro ty, kteří mají problémy s usínáním. Kombinace storytellingu a relaxačních technik pro lepší kvalitu spánku. Vaše cesta ke klidnému a regenerativnímu odpočinku.",
      format: "usinani", 
      link: "https://dev.calmoryapp.com/#registrace",
      image: "/lovable-uploads/220593f7-6d2d-44db-b88d-788565fefa7d.png"
    }
  ];

  const newsletterContent = [
    {
      icon: Brain,
      title: "Meditace týdne: Odlož den",
      description: "Krátká praxe, která vám pomůže uvolnit napětí a odložit tíhu každodennosti.",
      link: "https://dev.calmoryapp.com/#registrace",
      format: "meditace",
      image: "/lovable-uploads/9ac1b17f-5154-4886-bdbb-fc0ae03d1e33.png"
    },
    {
      icon: BookOpen,
      title: "Článek týdne: Ta druhá",
      description: "Příběh dvou sester, které se přestaly srovnávat a začaly růst vedle sebe. O přijetí, blízkosti i rozdílnosti.",
      link: "https://calmoryapp.com/cs/a-600-ta-druha",
      format: "pribeh",
      image: "/lovable-uploads/5e06c86b-7158-4dbc-94a4-395f95d2d5d7.png"
    },
    {
      icon: Leaf,
      title: "Offline tip Calmory",
      description: "Vytvořte si doma malý ostrůvek klidu: zapalte svíčku, odložte telefon a nalaďte se na dech.",
      link: "https://dev.calmoryapp.com/#registrace",
      format: "tip",
      image: "/lovable-uploads/62693207-956f-447b-9b03-b7824e1f7aa3.png"
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
        {/* Main Tab Selector */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {selectedMainTab === "email" ? "Email Marketing Šablony - Calmory" : "Modální okna - Calmory"}
          </h1>
          <div className="flex gap-2 mb-6">
            <Button
              variant={selectedMainTab === "email" ? "default" : "outline"}
              onClick={() => setSelectedMainTab("email")}
            >
              Email šablony
            </Button>
            <Button
              variant={selectedMainTab === "modal" ? "default" : "outline"}
              onClick={() => setSelectedMainTab("modal")}
            >
              Modální okna
            </Button>
          </div>

          {/* Email Sub-tabs */}
          {selectedMainTab === "email" && (
            <div className="flex gap-2 mb-6">
              {["newsletter", "content", "launch"].map((key) => (
                <Button
                  key={key}
                  variant={selectedTemplate === key ? "default" : "outline"}
                  onClick={() => setSelectedTemplate(key)}
                  className="capitalize"
                >
                  {key === "newsletter" && "Díky za předregistraci"}
                  {key === "content" && "Ukázky vzhledu aplikace"}
                  {key === "launch" && "Systémová šablona"}
                </Button>
              ))}
            </div>
          )}

          {/* Modal Sub-tabs */}
          {selectedMainTab === "modal" && (
            <div className="flex gap-2 mb-6">
              <Button
                variant={selectedModalTab === "reflexe" ? "default" : "outline"}
                onClick={() => setSelectedModalTab("reflexe")}
              >
                Reflexe
              </Button>
            </div>
          )}
        </div>

        {/* Content Preview */}
        {selectedMainTab === "email" && (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl mx-auto">
            {/* Email Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-lg">Calmory - Vaše malá dávka klidu na tento týden</span>
                </div>
                <div className="text-right">
                  <a href="#" className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Webová verze newsletteru
                  </a>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="p-6">
              {/* Hero Section */}
              <div className="relative text-center mb-8 rounded-lg overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/lovable-uploads/61360993-992c-4560-9f2a-8748066df71a.png')`,
                    filter: 'brightness(0.6)'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{currentTemplate.title}</h2>
                  <p className="text-white/90 mb-6 max-w-lg mx-auto leading-relaxed">{currentTemplate.subtitle}</p>
                </div>
                
              </div>

              {/* Newsletter Content */}
              {selectedTemplate === "newsletter" && (
                <div className="mb-8 space-y-8">
                  {/* Dynamic Countdown */}
                  <div className="text-center bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <p className="text-lg font-semibold text-primary">Již za 8 týdnů bude aplikace ke stažení!</p>
                    </div>
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

                  {/* Newsletter Section Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">Calmory novinky a tipy</h3>
                    <p className="text-muted-foreground">Vaše týdenní dávka klidu</p>
                  </div>

                  {/* Content Showcase - 3 blocks side by side */}
                  <div className="mb-8">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Play className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Ukázka obsahu / Vyzkoušejte</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Prozkoumejte naše terapeutické obsahy a najděte si tu pravou techniku pro váš klid
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {showcaseContent.map((item, index) => {
                        const colors = getFormatColor(item.format);
                        return (
                          <Card key={index} className="p-0 overflow-hidden hover:shadow-md transition-shadow">
                            {/* Full width square image */}
                            <div className="w-full aspect-square border-b overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <Badge 
                                className="mb-3 gap-1" 
                                style={{ 
                                  backgroundColor: colors.background === "transparent" ? "transparent" : `hsl(${colors.background})`,
                                  color: `hsl(${colors.text})`,
                                  border: colors.background === "transparent" ? "1px solid hsl(0 0% 80%)" : "none"
                                }}
                              >
                                <item.icon className="w-3 h-3" />
                                {item.format}
                              </Badge>
                              <h4 className="font-semibold text-sm mb-3">{item.title}</h4>
                              <Button 
                                size="sm" 
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 mb-4"
                                asChild
                              >
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                  <Play className="w-3 h-3 mr-1" />
                                  Spustit ukázku
                                </a>
                              </Button>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bonus Material Section Title */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Bonusový materiál týdne</h3>
                    </div>
                  </div>

                  {/* Bonus Material Section */}
                  <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-8">
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

                  {/* Newsletter Weekly Content */}
                  <div className="mb-8">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Týdenní obsah</h3>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {newsletterContent.map((item, index) => {
                        const colors = getFormatColor(item.format);
                        return (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              {/* Preview Image */}
                              <div className="w-20 h-20 rounded-lg border overflow-hidden flex-shrink-0">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-start gap-2 mb-2">
                                  <h4 className="font-semibold text-sm flex-1">{item.title}</h4>
                                  <Badge 
                                    className="text-xs gap-1" 
                                    style={{ 
                                      backgroundColor: colors.background === "transparent" ? "transparent" : `hsl(${colors.background})`,
                                      color: `hsl(${colors.text})`,
                                      border: colors.background === "transparent" ? "1px solid hsl(0 0% 80%)" : "none"
                                    }}
                                  >
                                    <item.icon className="w-3 h-3" />
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
                </div>
              )}

              {/* Content Template - Same as Newsletter */}
              {selectedTemplate === "content" && (
                <div className="mb-8 space-y-8">
                  {/* Dynamic Countdown */}
                  <div className="text-center bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <p className="text-lg font-semibold text-primary">Již za 8 týdnů bude aplikace ke stažení!</p>
                    </div>
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

                  {/* App Mockup Section */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-4">Jak bude aplikace vypadat</h3>
                    <p className="text-muted-foreground mb-6">
                      Podívejte se na návrhy rozhraní, které bude vaším průvodcem na cestě ke klidnější mysli
                    </p>
                    
                    {/* Mockup Image */}
                    <div className="relative bg-gradient-to-br from-primary/5 to-muted/20 rounded-2xl p-8 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                      <div className="relative z-10">
                        <img 
                          src="/lovable-uploads/db32f3bb-95b9-4ba7-9c5b-950aa5da24bc.png" 
                          alt="Ukázky rozhraní aplikace Calmory"
                          className="w-full max-w-3xl mx-auto h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Section Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">Calmory novinky a tipy</h3>
                    <p className="text-muted-foreground">Vaše týdenní dávka klidu</p>
                  </div>

                  {/* Content Showcase - 3 blocks side by side */}
                  <div className="mb-8">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Play className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Ukázka obsahu / Vyzkoušejte</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Prozkoumejte naše terapeutické obsahy a najděte si tu pravou techniku pro váš klid
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {showcaseContent.map((item, index) => {
                        const colors = getFormatColor(item.format);
                        return (
                          <Card key={index} className="p-0 overflow-hidden hover:shadow-md transition-shadow">
                            {/* Full width square image */}
                            <div className="w-full aspect-square border-b overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <Badge 
                                className="mb-3 gap-1" 
                                style={{ 
                                  backgroundColor: colors.background === "transparent" ? "transparent" : `hsl(${colors.background})`,
                                  color: `hsl(${colors.text})`,
                                  border: colors.background === "transparent" ? "1px solid hsl(0 0% 80%)" : "none"
                                }}
                              >
                                <item.icon className="w-3 h-3" />
                                {item.format}
                              </Badge>
                              <h4 className="font-semibold text-sm mb-3">{item.title}</h4>
                              <Button 
                                size="sm" 
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 mb-4"
                                asChild
                              >
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                  <Play className="w-3 h-3 mr-1" />
                                  Spustit ukázku
                                </a>
                              </Button>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bonus Material Section Title */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Bonusový materiál týdne</h3>
                    </div>
                  </div>

                  {/* Bonus Material Section */}
                  <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-8">
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

                  {/* Weekly Content */}
                  <div className="mb-8">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Týdenní obsah</h3>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {newsletterContent.map((item, index) => {
                        const colors = getFormatColor(item.format);
                        return (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              {/* Preview Image */}
                              <div className="w-20 h-20 rounded-lg border overflow-hidden flex-shrink-0">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-start gap-2 mb-2">
                                  <h4 className="font-semibold text-sm flex-1">{item.title}</h4>
                                  <Badge 
                                    className="text-xs gap-1" 
                                    style={{ 
                                      backgroundColor: colors.background === "transparent" ? "transparent" : `hsl(${colors.background})`,
                                      color: `hsl(${colors.text})`,
                                      border: colors.background === "transparent" ? "1px solid hsl(0 0% 80%)" : "none"
                                    }}
                                  >
                                    <item.icon className="w-3 h-3" />
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
                </div>
              )}

              {/* System Template - App Store Connect Example */}
              {selectedTemplate === "launch" && (
                <div className="mb-8 space-y-8">
                  {/* System Message Alert */}
                  <Card className="border-orange-200 bg-orange-50">
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-2">App Store Connect</h4>
                          <p className="text-sm text-orange-800 mb-4">
                            Hello,<br/><br/>
                            We noticed one or more issues with a recent delivery for the following app:
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* App Information Block */}
                  <Card className="bg-gray-50 border-gray-200">
                    <div className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Informace o aplikaci
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">App Name:</span>
                          <span className="font-medium">CalmoryApp</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">App Apple ID:</span>
                          <span className="font-mono">6751493189</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Version:</span>
                          <span>1.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Build:</span>
                          <span>21</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Status Badge */}
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800 border-green-300 px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Delivery Successful
                    </Badge>
                  </div>

                  {/* Issues Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                      Zjištěné problémy
                    </h3>
                    
                    <div className="space-y-4">
                      <Card className="border-red-200 bg-red-50">
                        <div className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-red-600 text-xs font-bold">1</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-red-900 mb-2">ITMS-90683: Missing purpose string in Info.plist</h4>
                              <p className="text-sm text-red-800 mb-3">
                                Your app's code references one or more APIs that access sensitive user data. The Info.plist file should contain a <code className="bg-red-200 px-1 rounded">NSLocationAlwaysAndWhenInUseUsageDescription</code> key with a user-facing purpose string.
                              </p>
                              <Button variant="outline" size="sm" className="text-red-700 border-red-300 hover:bg-red-100">
                                <ExternalLink className="w-3 h-3 mr-2" />
                                View Documentation
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>

                      <Card className="border-red-200 bg-red-50">
                        <div className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-red-600 text-xs font-bold">2</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-red-900 mb-2">ITMS-90683: Missing purpose string in Info.plist</h4>
                              <p className="text-sm text-red-800 mb-3">
                                The Info.plist file should contain a <code className="bg-red-200 px-1 rounded">NSLocationWhenInUseUsageDescription</code> key with a user-facing purpose string explaining why your app needs location data.
                              </p>
                              <Button variant="outline" size="sm" className="text-red-700 border-red-300 hover:bg-red-100">
                                <ExternalLink className="w-3 h-3 mr-2" />
                                View Documentation
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Info Box */}
                  <Card className="border-blue-200 bg-blue-50">
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-2">Tip pro vývojáře</h4>
                          <p className="text-sm text-blue-800">
                            Although delivery was successful, you may want to correct these issues in your next delivery. 
                            If you're using external libraries or SDKs, they may reference APIs that require a purpose string.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* UI Elements Showcase */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ukázka UI elementů</h3>
                    
                    {/* Buttons */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Tlačítka</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button>Primary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Badges & Status</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Success
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Warning
                        </Badge>
                        <Badge className="bg-red-100 text-red-800">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Error
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          <Info className="w-3 h-3 mr-1" />
                          Info
                        </Badge>
                      </div>
                    </div>

                    {/* Lists */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Seznamy s ikonami</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Completed task item</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">Pending task item</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">Team collaboration item</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Settings className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Configuration item</span>
                        </div>
                      </div>
                    </div>

                    {/* Typography */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Typografie</h4>
                      <div className="space-y-2">
                        <h1 className="text-2xl font-bold">Hlavní nadpis H1</h1>
                        <h2 className="text-xl font-semibold">Podnadpis H2</h2>
                        <h3 className="text-lg font-medium">Nadpis třetí úrovně H3</h3>
                        <p className="text-base">Obyčejný odstavec s normálním textem.</p>
                        <p className="text-sm text-muted-foreground">Menší text nebo poznámka.</p>
                        <p className="text-xs text-muted-foreground">Velmi malý text pro detaily.</p>
                      </div>
                    </div>

                    {/* Code block */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Kódové bloky</h4>
                      <Card className="bg-gray-900 text-gray-100 p-4">
                        <code className="text-sm">
                          {`<key>NSLocationWhenInUseUsageDescription</key>
<string>This app uses location to provide personalized meditation content based on your environment.</string>`}
                        </code>
                      </Card>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center space-y-4">
                    <div className="flex gap-3 justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Upload New Binary
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View in App Store Connect
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Signed,<br/>
                      <strong>Apple Developer Relations</strong>
                    </p>
                  </div>
                </div>
              )}

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
                  <p className="text-xs text-muted-foreground">- Michaela P. - maminka na mateřské dovolené</p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-xs text-muted-foreground border-t pt-4">
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
                
                <div className="flex justify-center gap-4 mb-4">
                  <a href="#" className="hover:text-foreground">Zásady ochrany</a>
                  <a href="#" className="hover:text-foreground">Odhlásit</a>
                  <a href="mailto:hello@calmoryapp.com" className="hover:text-foreground">Kontakt</a>
                </div>
                
                <p className="mb-4">© 2024 Calmory. Všechna práva vyhrazena.</p>
                
                {/* Legal Information */}
                <div className="border-t pt-4 text-xs text-muted-foreground">
                  <p className="mb-2">Tento e-mail byl odeslán na adresu standa@knotek.eu.</p>
                  <p className="mb-1">Odesilatelem je Booker Fish, s.r.o., provozovatel terapeutické aplikace Calmory.</p>
                  <p>Tento e-mail je podle zákona obchodním sdělením.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Windows Demo */}
        {selectedMainTab === "modal" && selectedModalTab === "reflexe" && (
          <div className="max-w-sm mx-auto">
            {/* Mobile Phone Frame */}
            <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] relative">
                {/* Status Bar */}
                <div className="bg-gray-900 text-white text-xs py-1 px-4 flex justify-between items-center">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Meditace dokončena</h2>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-6 flex-1 flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-blue-50">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Skvělá práce!</h3>
                    <p className="text-gray-600 text-sm">Dokončili jste 10minutovou meditaci</p>
                  </div>

                  {/* Progress Ring */}
                  <div className="relative mb-6">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">10:00</span>
                    </div>
                  </div>

                  <Button className="mb-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-0">
                    Pokračovat v aplikaci
                  </Button>
                </div>

                {/* Modal Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white rounded-2xl p-6 m-6 max-w-xs w-full shadow-2xl transform scale-105 animate-fade-in">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Jak se cítíte?</h3>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 mb-6 text-center">
                      Pomozte nám lépe pochopit váš pocit po meditaci
                    </p>

                    {/* Emotion Selection */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: Smile, label: "Skvěle", color: "text-green-500", bg: "bg-green-50 hover:bg-green-100" },
                        { icon: HeartHandshake, label: "Klidně", color: "text-blue-500", bg: "bg-blue-50 hover:bg-blue-100" },
                        { icon: Sparkles, label: "Energicky", color: "text-purple-500", bg: "bg-purple-50 hover:bg-purple-100" },
                        { icon: Meh, label: "Neutrálně", color: "text-gray-500", bg: "bg-gray-50 hover:bg-gray-100" },
                        { icon: Moon, label: "Ospalě", color: "text-indigo-500", bg: "bg-indigo-50 hover:bg-indigo-100" },
                        { icon: Frown, label: "Nejistě", color: "text-orange-500", bg: "bg-orange-50 hover:bg-orange-100" }
                      ].map((emotion, index) => {
                        const IconComponent = emotion.icon;
                        return (
                          <button
                            key={index}
                            className={`${emotion.bg} rounded-xl p-3 text-center transition-all hover:scale-105 active:scale-95`}
                          >
                            <IconComponent className={`w-6 h-6 mx-auto mb-1 ${emotion.color}`} />
                            <span className="text-xs font-medium text-gray-700">{emotion.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white border-0">
                        Odeslat hodnocení
                      </Button>
                      <Button variant="outline" className="w-full text-gray-600">
                        Přeskočit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Description */}
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Modální okno reflexe</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Po dokončení meditace se uživateli zobrazí modální okno pro zachycení jeho pocitů a reflexi prožitku.
              </p>
              <div className="flex gap-2 justify-center text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Emoční zpětná vazba
                </span>
                <span className="flex items-center gap-1">
                  <Brain className="w-3 h-3" />
                  Sledování pokroku
                </span>
              </div>
            </div>
          </div>
        )}

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
