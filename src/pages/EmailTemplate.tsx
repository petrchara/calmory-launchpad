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

  // Generate email HTML for export
  const generateEmailHTML = useCallback(() => {
    const templateData = templates[selectedTemplate as keyof typeof templates];
    
    // Get the hero image URL
    const heroImageUrl = '/lovable-uploads/61360993-992c-4560-9f2a-8748066df71a.png';
    
    let mainContent = '';
    
    if (selectedTemplate === 'newsletter') {
      mainContent = `
        <!-- Newsletter Content -->
        <tr>
          <td style="padding: 20px;">
            <!-- Countdown Section -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 8px; margin-bottom: 30px;">
              <tr>
                <td style="padding: 20px; text-align: center;">
                  <h3 style="margin: 0 0 15px 0; color: #059669; font-size: 18px;">📱 Již za 8 týdnů bude aplikace ke stažení!</h3>
                  <table width="200" cellpadding="0" cellspacing="0" align="center">
                    <tr>
                      <td style="text-align: center; padding: 0 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #059669;">56</div>
                        <div style="font-size: 12px; color: #6b7280;">DNÍ</div>
                      </td>
                      <td style="text-align: center; padding: 0 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #059669;">8</div>
                        <div style="font-size: 12px; color: #6b7280;">HODIN</div>
                      </td>
                      <td style="text-align: center; padding: 0 10px;">
                        <div style="font-size: 24px; font-weight: bold; color: #059669;">23</div>
                        <div style="font-size: 12px; color: #6b7280;">MINUT</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Content Showcase -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
              <tr>
                <td style="text-align: center; padding-bottom: 20px;">
                  <h3 style="margin: 0; font-size: 20px; color: #1f2937;">▶️ Ukázka obsahu / Vyzkoušejte</h3>
                  <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">Prozkoumejte naše terapeutické obsahy a najděte si tu pravou techniku pro váš klid</p>
                </td>
              </tr>
            </table>
            
            <!-- Content Blocks -->
            ${showcaseContent.map(item => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <tr>
                <td>
                  <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; display: block;">
                </td>
              </tr>
              <tr>
                <td style="padding: 20px;">
                  <div style="background: ${getFormatColor(item.format).background !== 'transparent' ? `hsl(${getFormatColor(item.format).background})` : '#f3f4f6'}; color: ${`hsl(${getFormatColor(item.format).text})`}; padding: 4px 8px; border-radius: 4px; font-size: 12px; display: inline-block; margin-bottom: 10px;">
                    ${item.format}
                  </div>
                  <h4 style="margin: 0 0 10px 0; font-size: 16px; color: #1f2937;">${item.title}</h4>
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">${item.description}</p>
                  <a href="${item.link}" style="background: #3b82f6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">▶️ Spustit ukázku</a>
                </td>
              </tr>
            </table>
            `).join('')}
            
            <!-- Bonus Material -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.1)); border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.2); margin-bottom: 30px;">
              <tr>
                <td style="padding: 25px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #1f2937;">🎁 Bonusový materiál týdne</h3>
                  <h4 style="margin: 0 0 10px 0; font-size: 16px; color: #1f2937;">Zdarma ke stažení: Průvodce klidným dnem</h4>
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">
                    PDF s praktickými tipy a cvičeními, která vám pomohou najít klid v každé situaci. Ideální pro začátečníky i pokročilé.
                  </p>
                  <a href="https://dev.calmoryapp.com/#registrace" style="background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">📥 Stáhnout zdarma</a>
                </td>
              </tr>
            </table>
            
            <!-- Weekly Content -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
              <tr>
                <td style="text-align: center; padding-bottom: 20px;">
                  <h3 style="margin: 0; font-size: 18px; color: #1f2937;">📖 Týdenní obsah</h3>
                </td>
              </tr>
            </table>
            
            ${newsletterContent.map(item => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <tr>
                <td width="120" style="padding: 0;">
                  <img src="${item.image}" alt="${item.title}" style="width: 120px; height: 120px; object-fit: cover; display: block;">
                </td>
                <td style="padding: 15px;">
                  <div style="background: ${getFormatColor(item.format).background !== 'transparent' ? `hsl(${getFormatColor(item.format).background})` : '#f3f4f6'}; color: ${`hsl(${getFormatColor(item.format).text})`}; padding: 3px 6px; border-radius: 4px; font-size: 11px; display: inline-block; margin-bottom: 8px;">
                    ${item.format}
                  </div>
                  <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #1f2937;">${item.title}</h4>
                  <p style="margin: 0 0 10px 0; font-size: 12px; color: #6b7280; line-height: 1.4;">${item.description}</p>
                  <a href="${item.link}" style="background: #10b981; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; display: inline-block;">Číst více</a>
                </td>
              </tr>
            </table>
            `).join('')}
            
          </td>
        </tr>`;
        
    } else if (selectedTemplate === 'content') {
      mainContent = `
        <!-- Content Showcase Template -->
        <tr>
          <td style="padding: 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
              <tr>
                <td style="text-align: center; padding-bottom: 20px;">
                  <h3 style="margin: 0; font-size: 20px; color: #1f2937;">📱 Podívejte se na vzhled aplikace Calmory</h3>
                  <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280;">Nahlédněte do budoucí aplikace pro terapeutickou péči o duševní zdraví</p>
                </td>
              </tr>
            </table>
            
            ${showcaseContent.map(item => `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <tr>
                <td>
                  <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 250px; object-fit: cover; display: block;">
                </td>
              </tr>
              <tr>
                <td style="padding: 20px;">
                  <h4 style="margin: 0 0 10px 0; font-size: 18px; color: #1f2937;">${item.title}</h4>
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #6b7280; line-height: 1.5;">${item.description}</p>
                  <a href="${item.link}" style="background: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">Předregistrovat se</a>
                </td>
              </tr>
            </table>
            `).join('')}
            
          </td>
        </tr>`;
        
    } else { // launch template
      mainContent = `
        <!-- System Template -->
        <tr>
          <td style="padding: 20px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 25px;">
              <tr>
                <td style="padding: 20px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #1e40af;">ℹ️ App Store Connect - Notification</h3>
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #374151;"><strong>App Name:</strong> CalmoryApp</p>
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #374151;"><strong>Version:</strong> 1.0.0</p>
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #374151;"><strong>Status:</strong> Ready for Review</p>
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #374151;"><strong>Platform:</strong> iOS</p>
                  <a href="https://dev.calmoryapp.com" style="background: #1e40af; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">Zobrazit detaily</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
    }

    const baseHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="cs">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${templateData.subject}</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <style type="text/css">
    /* Client-specific Styles */
    #outlook a { padding: 0; }
    body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; }
    .ExternalClass { width: 100%; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
    table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    a img { border: none; }
    
    /* iOS Blue Links */
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
    
    /* Android Center Fix */
    div[style*="margin: 16px 0;"] { margin: 0 !important; }
    
    @media only screen and (max-width: 600px) {
      .mobile-hidden { display: none !important; }
      .mobile-center { text-align: center !important; }
      .mobile-full { width: 100% !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc;">
  
  <!-- Preheader Text -->
  <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all;">
    ${templateData.preheader}
  </div>
  
  <!-- Email Container -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; min-height: 100vh;">
    <tr>
      <td align="center" valign="top" style="padding: 20px 0;">
        
        <!-- Main Email Table -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.05)); padding: 20px; border-bottom: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="32" height="32" style="background: linear-gradient(135deg, #10b981, #3b82f6); border-radius: 50%; text-align: center; vertical-align: middle;">
                          <span style="color: white; font-size: 16px;">💙</span>
                        </td>
                        <td style="padding-left: 12px;">
                          <span style="font-size: 18px; font-weight: bold; color: #1f2937;">Calmory - Vaše malá dávka klidu na tento týden</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="text-align: right;">
                    <a href="#" style="font-size: 12px; color: #3b82f6; text-decoration: none;">🔗 Webová verze newsletteru</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Hero Section -->
          <tr>
            <td style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${heroImageUrl}'); background-size: cover; background-position: center; padding: 50px 20px; text-align: center; color: white;">
              <div style="width: 64px; height: 64px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="font-size: 24px;">💙</span>
              </div>
              <h1 style="margin: 0 0 15px 0; font-size: 28px; font-weight: bold; color: white;">${templateData.title}</h1>
              <p style="margin: 0 0 25px 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); max-width: 400px; margin-left: auto; margin-right: auto; line-height: 1.5;">${templateData.subtitle}</p>
              <a href="https://dev.calmoryapp.com/#registrace" style="background: rgba(255, 255, 255, 0.2); color: white; border: 1px solid rgba(255, 255, 255, 0.3); padding: 12px 24px; text-decoration: none; border-radius: 8px; font-size: 16px; display: inline-block; backdrop-filter: blur(10px);">${templateData.cta}</a>
            </td>
          </tr>
          
          ${mainContent}
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h4 style="margin: 0 0 15px 0; font-size: 16px; color: #1f2937;">📱 Sledujte nás na sociálních sítích</h4>
                    <table cellpadding="0" cellspacing="0" align="center">
                      <tr>
                        <td style="padding: 0 10px;">
                          <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px;">📘</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px;">📷</a>
                        </td>
                        <td style="padding: 0 10px;">
                          <a href="#" style="color: #3b82f6; text-decoration: none; font-size: 24px;">📺</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; color: #6b7280; line-height: 1.5;">
                    <p style="margin: 0 0 10px 0;">© 2024 Calmory. Všechna práva vyhrazena.</p>
                    <p style="margin: 0;">Pokud si již nepřejete dostávat naše e-maily, <a href="#" style="color: #3b82f6; text-decoration: none;">odhlaste se zde</a>.</p>
                    <p style="margin: 10px 0 0 0;">Calmory s.r.o. | Praha, Česká republika</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>`;
    return baseHTML;
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
          <div className="flex justify-center overflow-x-auto">
            {/* Mobile Phone Frame - iPhone 16 dimensions */}
            <div 
              className="relative bg-black rounded-[3rem] p-3 shadow-2xl flex-shrink-0" 
              style={{ width: '390px', height: '780px' }}
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden w-full h-full relative">
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
              
              <Button 
                onClick={() => setIsReflexeModalOpen(true)}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white mb-4"
                size="lg"
              >
                Vyzkoušet Handle Modal pro Reflexe
              </Button>
              
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

        {/* Handle Modal Demo */}
        {selectedMainTab === "modal" && selectedModalTab === "handle" && (
          <div className="space-y-8">
            {/* Live Demo Section */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Handle Behavior Modal</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ukázka modálního okna podle Ionic dokumentace s Handle Behavior funkcionalitou. 
                Modal se ovládá pomocí handle (úchytu) v horní části a podporuje různé breakpointy.
              </p>
              
              <Button 
                onClick={() => setIsHandleModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                size="lg"
              >
                Vyzkoušet Handle Modal
              </Button>
            </div>

            {/* Feature Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Breakpointy</h4>
                <p className="text-sm text-muted-foreground">
                  Modal podporuje 4 breakpointy: 0%, 25%, 50%, a 75% výšky obrazovky
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Intuitivní ovládání</h4>
                <p className="text-sm text-muted-foreground">
                  Kliknutím na handle cyklujete mezi breakpointy, táhnutím nastavujete přesnou pozici
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Mobilní podpora</h4>
                <p className="text-sm text-muted-foreground">
                  Plná podpora dotyku na mobilních zařízeních i ovládání myší na desktopu
                </p>
              </Card>
            </div>

            {/* Technical Details */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Technické detaily</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-2">Funkčnosti:</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Draggable handle s vizuálním feedbackem</li>
                    <li>• Smooth animace mezi breakpointy</li>
                    <li>• Automatické přichytávání k nejbližšímu breakpointu</li>
                    <li>• Zavření při dosažení 0% breakpointu</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Ovládání:</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Klik na handle = cyklování mezi velikostmi</li>
                    <li>• Drag handle = přesné nastavení pozice</li>
                    <li>• Klik mimo modal = zavření</li>
                    <li>• X tlačítko = okamžité zavření</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Code Preview */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Implementace</h4>
              <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
                <div className="text-muted-foreground mb-2">// React komponenta s Handle Behavior</div>
                <div><span className="text-blue-600">const</span> <span className="text-purple-600">HandleModal</span> = {`({ isOpen, onClose, children }) => {`}</div>
                <div className="ml-4">
                  <div className="text-muted-foreground">// Breakpointy a drag logika</div>
                  <div><span className="text-blue-600">const</span> BREAKPOINTS = [0, 0.25, 0.5, 0.75];</div>
                  <div><span className="text-blue-600">const</span> [currentBreakpoint, setCurrentBreakpoint] = useState(0.25);</div>
                </div>
                <div>{`}`}</div>
              </div>
            </Card>
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
              <Button variant="outline" size="sm" onClick={downloadHTML}>
                <Download className="w-4 h-4 mr-2" />
                Stáhnout HTML
              </Button>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                Kopírovat kód
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <HandleModal 
        isOpen={isHandleModalOpen} 
        onClose={() => setIsHandleModalOpen(false)}
        title="Handle Behavior Demo"
      >
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Úspěšně otevřeno!</h3>
            <p className="text-muted-foreground">
              Toto je ukázka Handle Behavior modalu podle Ionic dokumentace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Jak ovládat</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Klikni na handle pro cyklování</li>
                <li>• Táhni handle pro přesnou pozici</li>
                <li>• Funguje na dotyku i myší</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Breakpointy</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 25% - Minimální</li>
                <li>• 50% - Střední</li>
                <li>• 75% - Maximální</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              Handle modal je ideální pro mobilní aplikace kde uživatelé potřebují rychle upravovat velikost modalu. 
              Inspirováno Ionic frameworkem a je perfektní pro mapy, filtry nebo dlouhé seznamy.
            </p>
          </div>
        </div>
      </HandleModal>
      
      <HandleModal 
        isOpen={isReflexeModalOpen} 
        onClose={() => setIsReflexeModalOpen(false)}
        title="Reflexe po meditaci"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jak se cítíte?</h3>
            <p className="text-muted-foreground">
              Pomozte nám lépe pochopit váš pocit po dokončené meditaci
            </p>
          </div>
          
          {/* Emotion Selection */}
          <div className="grid grid-cols-3 gap-4">
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
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Výhody Handle Modalu</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Přirozené ovládání tažením</li>
              <li>• Různé velikosti podle potřeby</li>
              <li>• Optimalizováno pro mobil</li>
              <li>• Intuitivní pro uživatele</li>
            </ul>
          </div>
        </div>
      </HandleModal>
    </div>
  );
};

export default EmailTemplate;
