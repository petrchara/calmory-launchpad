import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-lg" aria-label="Calmory - domů">
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
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Otevřít menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <SheetHeader>
                <SheetTitle>Navigace</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 grid gap-4 text-base">
                <a href="#funkce" className="text-foreground hover:underline">Funkce a obsah aplikace</a>
                <a href="/o-nas" className="text-foreground hover:underline">O nás</a>
                <a href="/abeceda" className="text-foreground hover:underline">Terapeutická abeceda</a>
                <a href="/blog" className="text-foreground hover:underline">Články a příběhy</a>
                <a href="/email-sablona" className="text-foreground hover:underline">Email šablony</a>
                <a href="#faq" className="text-foreground hover:underline">FAQ</a>
                <Button asChild variant="hero" size="sm" className="mt-2">
                  <a href="#cekaci-listina">Přidat se</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#funkce" className="text-muted-foreground hover:text-foreground transition-colors">Funkce a obsah aplikace</a>
          <a href="/o-nas" className="text-muted-foreground hover:text-foreground transition-colors">O nás</a>
          <a href="/abeceda" className="text-muted-foreground hover:text-foreground transition-colors">Terapeutická abeceda</a>
          <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Články a příběhy</a>
          <a href="/email-sablona" className="text-muted-foreground hover:text-foreground transition-colors">Email šablony</a>
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
