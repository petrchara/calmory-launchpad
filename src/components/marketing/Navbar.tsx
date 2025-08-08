import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg" aria-label="Calmory - domů">
          <img
            src="/lovable-uploads/7d72fd40-49d6-45e8-a440-6676b7d571a4.png"
            alt="Ikona aplikace Calmory"
            width={24}
            height={24}
            loading="eager"
            decoding="async"
            className="h-6 w-6 rounded-md"
          />
          <span>Calmory</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#funkce" className="text-muted-foreground hover:text-foreground transition-colors">Funkce</a>
          <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Button asChild variant="hero" size="sm">
            <a href="#cekaci-listina">Přidat se</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
