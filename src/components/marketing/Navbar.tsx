import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">Calmory</a>
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
