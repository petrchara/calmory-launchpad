import { Instagram, Facebook, Youtube } from "lucide-react";

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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
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
