import { useState } from "react";
import { CheckCircle2, Heart, Brain, Moon, Play, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormatColor } from "@/lib/content-colors";

const EmailTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("launch");

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
    launch: {
      subject: "🌟 Calmory už brzy - Vaše klidná mysl čeká",
      title: "Calmory přichází za 2 měsíce",
      subtitle: "Připravte se na revolutionizující terapeutickou aplikaci",
      cta: "Získat časný přístup"
    },
    content: {
      subject: "🧘 Objevte sílu řízených meditací s Calmory",
      title: "Každý den klidnější mysl",
      subtitle: "Praktické techniky pro váš lepší den",
      cta: "Vyzkoušet zdarma"
    },
    countdown: {
      subject: "⏰ Pouze 30 dní do spuštění Calmory",
      title: "Odpočítávání začalo",
      subtitle: "Buďte mezi prvními, kdo si vyzkouší Calmory",
      cta: "Rezervovat místo"
    }
  };

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
              <p className="mb-2">© 2024 Calmory. Všechna práva vyhrazena.</p>
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