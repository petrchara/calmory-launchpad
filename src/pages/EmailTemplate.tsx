import { useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2, Heart, Brain, Moon, Play, Download, Star, BookOpen, Leaf, Gift, Facebook, Instagram, Youtube, Smartphone, ExternalLink, AlertTriangle, Info, Mail, Users, Clock, Settings, X, Smile, Meh, Frown, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormatColor } from "@/lib/content-colors";
import { HandleModal } from "@/components/HandleModal";

const EmailTemplate = () => {
  const { toast } = useToast();
  const [selectedMainTab, setSelectedMainTab] = useState("email");
  const [selectedTemplate, setSelectedTemplate] = useState("newsletter");
  const [selectedModalTab, setSelectedModalTab] = useState("reflexe");
  const [isHandleModalOpen, setIsHandleModalOpen] = useState(false);
  const [isReflexeModalOpen, setIsReflexeModalOpen] = useState(false);

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

  const currentTemplate = templates[selectedTemplate as keyof typeof templates];

  // Generate email HTML for export with complete styling
  const generateEmailHTML = useCallback(() => {
    const templateData = templates[selectedTemplate as keyof typeof templates];
    const baseUrl = 'https://lovable.dev/projects/ba6cd807-aa14-4310-b623-8d222a06578d';
    const heroImageUrl = `${baseUrl}/lovable-uploads/61360993-992c-4560-9f2a-8748066df71a.png`;
    
    let contentBlocks = '';
    
    if (selectedTemplate === 'newsletter') {
      contentBlocks = showcaseContent.map(item => {
        const formatColors = getFormatColor(item.format);
        const bgColor = formatColors.background !== 'transparent' ? `hsl(${formatColors.background})` : '#f3f4f6';
        const textColor = `hsl(${formatColors.text})`;
        const imageUrl = `${baseUrl}${item.image}`;
        
        return `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <tr>
              <td>
                <img src="${imageUrl}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; display: block;">
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center;">
                <div style="background: ${bgColor}; color: ${textColor}; padding: 4px 8px; border-radius: 4px; font-size: 12px; display: inline-block; margin-bottom: 10px;">
                  ${item.format}
                </div>
                <h4 style="margin: 0 0 10px 0; font-size: 16px; color: #1f2937; font-weight: 600;">${item.title}</h4>
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">${item.description}</p>
                <a href="${item.link}" style="background: #3b82f6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block; font-weight: 500;">▶️ Spustit ukázku</a>
              </td>
            </tr>
          </table>`;
      }).join('');
    }

    const htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="cs">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${templateData.subject}</title>
  <style type="text/css">
    body { 
      width: 100% !important; 
      margin: 0; 
      padding: 0; 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
    }
    table { border-collapse: collapse; }
    img { outline: none; text-decoration: none; border: 0; }
    h1, h2, h3, h4, h5, h6 { margin: 0; font-weight: 600; }
    p { margin: 0; }
    a { color: #3b82f6; text-decoration: none; }
    
    @media only screen and (max-width: 600px) {
      .mobile-full { width: 100% !important; }
      .hero-content { padding: 30px 20px !important; }
      .hero-title { font-size: 24px !important; }
      .hero-subtitle { font-size: 14px !important; }
      .button { padding: 12px 20px !important; font-size: 14px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc;">
  
  <div style="display: none; font-size: 1px; opacity: 0; overflow: hidden;">
    ${templateData.preheader}
  </div>
  
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;" class="mobile-full">
          
          <tr>
            <td style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.05)); padding: 20px; border-bottom: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display: inline-flex; align-items: center;">
                      <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #10b981, #3b82f6); border-radius: 50%; text-align: center; line-height: 32px; margin-right: 12px;">
                        <span style="color: white; font-size: 16px;">💙</span>
                      </div>
                      <span style="font-size: 16px; font-weight: 600; color: #1f2937;">Calmory - Vaše malá dávka klidu na tento týden</span>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <a href="#" style="font-size: 12px; color: #3b82f6; text-decoration: none;">🔗 Web verze</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <tr>
            <td style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${heroImageUrl}'); background-size: cover; background-position: center; padding: 50px 20px; text-align: center; color: white;" class="hero-content">
              <div style="width: 64px; height: 64px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 20px auto; line-height: 64px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="font-size: 24px;">💙</span>
              </div>
              <h1 style="margin: 0 0 15px 0; font-size: 28px; font-weight: 700; color: white;" class="hero-title">${templateData.title}</h1>
              <p style="margin: 0 0 25px 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); max-width: 400px; margin-left: auto; margin-right: auto; line-height: 1.5;" class="hero-subtitle">${templateData.subtitle}</p>
              <a href="https://dev.calmoryapp.com/#registrace" style="background: rgba(255, 255, 255, 0.2); color: white; border: 1px solid rgba(255, 255, 255, 0.3); padding: 12px 24px; text-decoration: none; border-radius: 8px; font-size: 16px; display: inline-block; font-weight: 500;" class="button">${templateData.cta}</a>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 20px;">
              ${contentBlocks}
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <h4 style="margin: 0 0 15px 0; font-size: 16px; color: #1f2937; font-weight: 600;">📱 Sledujte nás na sociálních sítích</h4>
              <div style="margin-bottom: 20px;">
                <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px; margin: 0 10px;">📘</a>
                <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px; margin: 0 10px;">📷</a>
                <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px; margin: 0 10px;">📺</a>
              </div>
              <div style="font-size: 12px; color: #6b7280; line-height: 1.5;">
                <p style="margin: 0 0 10px 0;">© 2024 Calmory. Všechna práva vyhrazena.</p>
                <p style="margin: 0 0 10px 0;">Pokud si již nepřejete dostávat naše e-maily, <a href="#" style="color: #3b82f6;">odhlaste se zde</a>.</p>
                <p style="margin: 0;">Calmory s.r.o. | Praha, Česká republika</p>
              </div>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>`;
    return htmlTemplate;
  }, [selectedTemplate]);

  // Download HTML file
  const downloadHTML = useCallback(() => {
    const htmlContent = generateEmailHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `calmory-email-${selectedTemplate}-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "HTML stažen",
      description: `Soubor calmory-email-${selectedTemplate}.html byl úspěšně stažen.`,
    });
  }, [generateEmailHTML, selectedTemplate, toast]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    try {
      const htmlContent = generateEmailHTML();
      await navigator.clipboard.writeText(htmlContent);
      toast({
        title: "Zkopírováno",
        description: "HTML kód byl úspěšně zkopírován do schránky.",
      });
    } catch (err) {
      toast({
        title: "Chyba",
        description: "Nepodařilo se zkopírovat kód do schránky.",
        variant: "destructive"
      });
    }
  }, [generateEmailHTML, toast]);

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
              <Button
                variant={selectedModalTab === "handle" ? "default" : "outline"}
                onClick={() => setSelectedModalTab("handle")}
              >
                Handle Behavior
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
                </div>
              )}

              {/* Export Section */}
              <div className="p-6 border-t bg-muted/50">
                <div className="text-center space-y-4">
                  <h3 className="font-semibold">Export HTML pro email klienty</h3>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={downloadHTML} className="gap-2">
                      <Download className="w-4 h-4" />
                      Stáhnout HTML
                    </Button>
                    <Button onClick={copyToClipboard} variant="outline" className="gap-2">
                      <Settings className="w-4 h-4" />
                      Kopírovat kód
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailTemplate;
