import { Instagram, Facebook, Music, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Calmory. Všechna práva vyhrazena.</p>
          
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <nav className="flex flex-col items-center gap-2 text-sm md:flex-row md:items-center md:gap-6">
              <a href="/blog" className="text-muted-foreground hover:text-foreground">Blog</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Zásady ochrany osobních údajů</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Podmínky</a>
              <a href="mailto:hello@calmoryapp.com" className="text-muted-foreground hover:text-foreground">Kontakt</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/calmoryapp_cz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578518186914" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@calmoryapp_cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@CalmoryApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
